   import { connect } from "@tidbcloud/serverless";

   const conn = connect({ url: process.env.DATABASE_URL });
   export default conn;