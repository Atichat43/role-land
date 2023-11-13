export interface ICreateAuthProviderPayload {
  id?: string;

  name: string;
  clientId: string;
  callbackUrl: string;
}
