# API Rest with Clean Architecture

## Steps to run the project

1. Clone repository.
2. Run ````npm run install``` in terminal.
3. Clone .env.template file and rename to ".env"
4. Complete all env values.
5. Run ```npm run dev```.


## Explanation
1. Presentation includes everything that will be presented to the user and call all use cases. 
2. UserEntity contains all the user data.
3. UserEntityDto contains the data required for a given operation. (Data Transfer Object)
4. Domain includes all business rules and how it will be implemented in Infraestructure folder.
    - Datasource: Module that allows access to data from external systems, such as databases, web services or file systems. In this example we will use Prisma Client for PostgreSQL database.
    - Repository: It is a key component that allows the application to be decoupled from the data storage implementation.
5. Infraestructure separates from the business logic and interacts with external systems.
6. Use cases are responsible for implementing the business logic of an application.


