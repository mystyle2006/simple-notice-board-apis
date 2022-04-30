import { Liquibase, LiquibaseConfig, LiquibaseLogLevels } from 'liquibase';

const myConfig: LiquibaseConfig = {
  url: `jdbc:mysql://${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}?useSSL=false&allowPublicKeyRetrieval=true`,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  changeLogFile: `./sql/changelog.master.xml`,
  classpath: `${process.env.PWD}/tools/mysql-connector-java-8.0.22.jar`,
  logLevel: LiquibaseLogLevels.Info,
};
const liquibase = new Liquibase(myConfig);

export default liquibase;
