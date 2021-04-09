import firebaseServer from "firebase-admin";

const app = firebaseServer.apps.length
  ? firebaseServer.app()
  : firebaseServer.initializeApp({
      credential: firebaseServer.credential.cert({
        type: "service_account",
        project_id: "clocker-daian",
        private_key_id: "f246718050a04c4bb4fd986764f9da461ea95701",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCmQZgyD8lVYKZg\nBJBfkQcoJD9jsobhU+rVaWDzEwt1byC0/nSwmLULHppw6BU+cqoaai7UsVeHybRO\n2oEE7G2FMpjDtxnU8zumJmmg0Rjx6N1ezM9euSH/4DWrlMent/UREcHMHmO4D4FV\nf+ZmYI2196IPOPmpJK2S853wrMLbeHF/w+ozUrFn+TB6CK0jXQQbuDSRcW+blm66\n/Cw0S5l0uIAyHn++fRnb2C5M0b/jWwR6fRUXdsAEjXLQm9v39lGZV4jgc9K5pHu7\nOL/n7F0j7i0kP1SuswdAQ3AUep+yeOcjMTU+spvpYFnciHK927n5oR449EOiAsIn\nJ9lgp1MlAgMBAAECggEAIM9iH0MRSxmbS+iqq0l+PZRFtEGnr7E1b29v9BiGkuLe\n9AkhczZ3yB1+ghizFJNhcXwSCOSEryYFwOgLPTMBfB9bmYg5f1aPJ39+KgAJ6be4\ndDx8Eif8Bziyrs1aR4WcxgUYl1VJ/amFrx9iE0MrxET+BP4L+y7jWFRej4AwpkoB\nPpK5qtF0E/u6feZ5byitiQBsHWyRAe/lvnb4Ida/SxEcrIeCcZPrwatQ69PcjtX+\nz3d5ueTq1YdtH9JaBtqiuWLWttd1PV+1kOwSsLYlCn1ardzoxsL9OYr+c0lszlSP\nYLp/dVV6J+ktQCXGy5FU9DebKjsqpneyAxi9dF2lMwKBgQDm26bu5yrYCW9NpIoi\nvZ3EsbyqWMUWRpBq0kh/gyH1puaQU3UYTXpcHxGBWEHmVD5GkklrTrfr9gytoq9c\nP/mv9QsPu7StJGNbMMoTrYztI9bcYfYLr/VC9MWZHh4iMrsj/rs839/H+H3PlDMG\n7XevyUxcdi3Cd04yHgEKIL3RswKBgQC4XNZS4hRf0XvQNy+jCazTckv1d0bUQoxP\nnLhVg94TSPUqLcXgrN5+FuUMCm2egEQburDVeJu9X9HXdC55TS/+gLp73JDoTjTY\nrXlb63+tHD1V5qUxmwkuNaep4wkMc/JrPlBMoonhAcWrBkq716wbk5MmBLiSflD9\n1bF46v7rxwKBgBxigYH6VmA9uLu5MWrYGZ/noqTnSURV5MfdlyBmhTRpEwxH1qvo\nStUs1MAsk924GfgfYHubMC4JEMIAsMMM8qxZ2sRSdgKb6MN7mj0VJ7C4qWBrgw8o\n0WUsJ2eONnJJ/oyMc4UmmaNCwGVXeXaul/q7K3Jq7XFtreWnnsUaBXzVAoGAKznp\nLom/iS/OveUSkEGGehVEZgtPWhk4WLpAJhzDBvaGNRuCV8lwaVPo5EfVp+IfFflR\n2NtseJxs0P12oA5PAHciQkRW3YDotx0FZV30E5yZbPilJtpY7rK52wVWa8sLvcVg\ngndhqJYHyK+y+hP5UIXrbHCS7hYb20gtUlKW7qUCgYBA2PgV3JxSxCtnbQ50j0U1\nCWYw3WmPuKrh9aqlKF2jgbuzr59rB4wl4hQQga6V0IcU/3ix2WborDvVjJKM9Dqc\n7cQHZa+VCk6U81mFsZNdBHlGAvpCo60FLaO8dTGE8w0NJmqumU2ZcOWdy7ISEi2A\neY48n8Jz44UMTMaz+I25AQ==\n-----END PRIVATE KEY-----\n",
        client_email:
          "firebase-adminsdk-3az1t@clocker-daian.iam.gserviceaccount.com",
        client_id: "115797825133753029717",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3az1t%40clocker-daian.iam.gserviceaccount.com",
      }),
    });

export { firebaseServer };
