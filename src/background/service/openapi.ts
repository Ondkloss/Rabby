import { INITIAL_OPENAPI_URL } from '@/constant';
import { OpenApiService } from '@debank/rabby-api';
import { createPersistStore } from 'background/utils';
export * from '@debank/rabby-api/dist/types';

const service = new OpenApiService({
  store: await createPersistStore({
    name: 'openapi',
    template: {
      host: INITIAL_OPENAPI_URL,
    },
  }),
});

export default service;

export const fetchPhishingList = async () => {
  return fetch('https://static.debank.com/security/phishing-site.json').then<
    string[]
  >((res) => res.json());
};
