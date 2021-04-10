import firebaseServer from "firebase-admin";

const app = firebaseServer.apps.length
  ? firebaseServer.app()
  : firebaseServer.initializeApp({
      credential: firebaseServer.credential.cert({
        type: process.env.NEXT_PUBLIC_DB_TYPE,
        project_id: process.env.NEXT_PUBLIC_DB_PROJECT_ID,
        private_key_id: process.env.NEXT_PUBLIC_DB_PRIVATE_KEY_ID,
        private_key: process.env.NEXT_PUBLIC_DB_PRIVATE_KEY,
        client_email: process.env.NEXT_PUBLIC_DB_CLIENT_EMAIL,
        client_id: process.env.NEXT_PUBLIC_DB_CLIENT_ID,
        auth_uri: process.env.NEXT_PUBLIC_DB_AUTH_URI,
        token_uri: process.env.NEXT_PUBLIC_DB_TOKEN_URI,
        auth_provider_x509_cert_url:
          process.env.NEXT_PUBLIC_DB_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.NEXT_PUBLIC_DB_CLIENT_X509_CERT_URL,
      }),
    });

export { firebaseServer };
