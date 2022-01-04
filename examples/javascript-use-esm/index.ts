import { JavaScriptGenerator } from '../../src';

const generator = new JavaScriptGenerator();
const jsonSchemaDraft7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  properties: {
    person: {
      type: 'object',
      additionalProperties: false,
      properties: {
        email: {
          type: 'string',
          format: 'email'
        }
      },
      required: ['email'],
    }
  },
  required: ['person'],
};

export async function generate() : Promise<void> {
  const models = await generator.generateCompleteModels(
    jsonSchemaDraft7, 
    {
      moduleSystem: 'ESM'
    }
  );
  for (const model of models) {
    console.log(model.result);
  }
}
generate();
