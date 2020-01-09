package ir.mbbn.shopping.hibernate;

//@Configuration
//@PropertySource("classpath*:server.properties")
//@EnableJpaRepositories("ir.mbbn.shopping.repositories")
//@EnableTransactionManagement
public class PersistenceContext {

//    @Bean
//    JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
//        JpaTransactionManager transactionManager = new JpaTransactionManager();
//        transactionManager.setEntityManagerFactory(entityManagerFactory);
//        return transactionManager;
//    }
//
//    @Bean
//    LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource, Environment env) {
//        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
//        entityManagerFactoryBean.setDataSource(dataSource);
//        entityManagerFactoryBean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
//        entityManagerFactoryBean.setPackagesToScan(env.getRequiredProperty("packagesToScan"));
//
//        Properties jpaProperties = new Properties();
//
//        //Configures the used database dialect. This allows Hibernate to create SQL
//        //that is optimized for the used database.
//        jpaProperties.put("hibernate.dialect", env.getRequiredProperty("hibernate.dialect"));
//
//        //Specifies the action that is invoked to the database when the Hibernate
//        //SessionFactory is created or closed.
//        jpaProperties.put("hibernate.hbm2ddl.auto", env.getRequiredProperty("hibernate.hbm2ddl"));
//
//        //Configures the naming strategy that is used when Hibernate creates
//        //new database objects and schema elements
//        jpaProperties.put("hibernate.ejb.naming_strategy", env.getRequiredProperty("hibernate.ejb.naming_strategy"));
//
//        //If the value of this property is true, Hibernate writes all SQL
//        //statements to the console.
//        jpaProperties.put("hibernate.show_sql", env.getRequiredProperty("hibernate.show_sql"));
//
//        //If the value of this property is true, Hibernate will format the SQL
//        //that is written to the console.
//        jpaProperties.put("hibernate.format_sql", env.getRequiredProperty("hibernate.format_sql"));
//
//        entityManagerFactoryBean.setJpaProperties(jpaProperties);
//
//        return entityManagerFactoryBean;
//    }
//
//    @Bean
//    DataSource dataSource(Environment env){
//        BasicDataSource basicDataSource = new BasicDataSource();
//        basicDataSource.setDriverClassName(env.getRequiredProperty("db.driver"));
//        basicDataSource.setUrl(env.getRequiredProperty("db.url"));
//        basicDataSource.setUsername(env.getRequiredProperty("db.username"));
//        basicDataSource.setPassword(env.getRequiredProperty("db.password"));
//        return basicDataSource;
//    }

}
