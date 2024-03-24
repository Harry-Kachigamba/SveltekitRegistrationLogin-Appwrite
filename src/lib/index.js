// place files you want to import through the `$lib` alias in this folder.
import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('<API-Endpoint>')
    .setProject('<projectID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
