"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6493],{3608:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var n=t(74848),r=t(28453),a=t(97719);const s={title:"Simplify your monolith to microservices migration using GraphQL",authors:[{name:"Jacob Gaffke",title:"Freelance web and game developer with experience in Rust, Godot and Web3.",url:"https://masterofgiraffe.com/",image_url:"https://masterofgiraffe.com/favicon.ico"}],tags:["GraphQL","Microservice","Best Practices","Migration"],description:"Streamline your migration from monolithic architecture to microservices with expert tips, practical examples, and step-by-step guidance using GraphQL.",image:"/images/blog/graphql-microservices-migration.png",hide_table_of_contents:!0,slug:"graphql-microservices-migration"},o=void 0,l={permalink:"/blog/graphql-microservices-migration",source:"@site/blog/graphql-microservices-migration-2024-08-15.md",title:"Simplify your monolith to microservices migration using GraphQL",description:"Streamline your migration from monolithic architecture to microservices with expert tips, practical examples, and step-by-step guidance using GraphQL.",date:"2024-08-15T00:00:00.000Z",tags:[{inline:!0,label:"GraphQL",permalink:"/blog/tags/graph-ql"},{inline:!0,label:"Microservice",permalink:"/blog/tags/microservice"},{inline:!0,label:"Best Practices",permalink:"/blog/tags/best-practices"},{inline:!0,label:"Migration",permalink:"/blog/tags/migration"}],readingTime:10.835,hasTruncateMarker:!0,authors:[{name:"Jacob Gaffke",title:"Freelance web and game developer with experience in Rust, Godot and Web3.",url:"https://masterofgiraffe.com/",image_url:"https://masterofgiraffe.com/favicon.ico",imageURL:"https://masterofgiraffe.com/favicon.ico"}],frontMatter:{title:"Simplify your monolith to microservices migration using GraphQL",authors:[{name:"Jacob Gaffke",title:"Freelance web and game developer with experience in Rust, Godot and Web3.",url:"https://masterofgiraffe.com/",image_url:"https://masterofgiraffe.com/favicon.ico",imageURL:"https://masterofgiraffe.com/favicon.ico"}],tags:["GraphQL","Microservice","Best Practices","Migration"],description:"Streamline your migration from monolithic architecture to microservices with expert tips, practical examples, and step-by-step guidance using GraphQL.",image:"/images/blog/graphql-microservices-migration.png",hide_table_of_contents:!0,slug:"graphql-microservices-migration"},unlisted:!1,nextItem:{title:"API Strategy: Driving Innovation and Growth in Modern Business",permalink:"/blog/api-strategy"}},c={authorsImageUrls:[void 0]},h=[{value:"Understanding Monoliths and Microservices",id:"understanding-monoliths-and-microservices",level:2},{value:"What is a Monolithic Architecture?",id:"what-is-a-monolithic-architecture",level:3},{value:"What are Microservices?",id:"what-are-microservices",level:3},{value:"Why Migrate from Monolith to Microservices?",id:"why-migrate-from-monolith-to-microservices",level:3},{value:"Challenges in Monolith to Microservices Migration",id:"challenges-in-monolith-to-microservices-migration",level:2},{value:"Data Management and Consistency",id:"data-management-and-consistency",level:3},{value:"Service Communication",id:"service-communication",level:3},{value:"Deployment Complexity",id:"deployment-complexity",level:3},{value:"Introduction to GraphQL",id:"introduction-to-graphql",level:2},{value:"What is GraphQL?",id:"what-is-graphql",level:3},{value:"Key Features of GraphQL",id:"key-features-of-graphql",level:3},{value:"GraphQL vs REST",id:"graphql-vs-rest",level:3},{value:"How GraphQL Simplifies Microservices Migration",id:"how-graphql-simplifies-microservices-migration",level:2},{value:"Unified Data Access Layer",id:"unified-data-access-layer",level:3},{value:"Efficient Data Fetching",id:"efficient-data-fetching",level:3},{value:"Schema Stitching and Federation",id:"schema-stitching-and-federation",level:3},{value:"Gradual Migration Support",id:"gradual-migration-support",level:3},{value:"Step-by-Step Guide to Using GraphQL in Your Migration",id:"step-by-step-guide-to-using-graphql-in-your-migration",level:2},{value:"Analyze Your Monolith",id:"analyze-your-monolith",level:3},{value:"Implement GraphQL Layer",id:"implement-graphql-layer",level:3},{value:"Design Your Microservice Architecture",id:"design-your-microservice-architecture",level:3},{value:"Migrate Services Incrementally",id:"migrate-services-incrementally",level:3},{value:"Test and Optimize",id:"test-and-optimize",level:3},{value:"Best Practices for GraphQL in Microservices Migration",id:"best-practices-for-graphql-in-microservices-migration",level:2},{value:"Use Strong Type System",id:"use-strong-type-system",level:3},{value:"Implement Proper Error Handling",id:"implement-proper-error-handling",level:3},{value:"Optimize Performance with Caching",id:"optimize-performance-with-caching",level:3},{value:"Ensure Security Measures",id:"ensure-security-measures",level:3},{value:"Successful Migration Stories Using GraphQL",id:"successful-migration-stories-using-graphql",level:2},{value:"Netflix",id:"netflix",level:3},{value:"GitHub",id:"github",level:3},{value:"Airbnb",id:"airbnb",level:3},{value:"Shopify",id:"shopify",level:3},{value:"Pinterest",id:"pinterest",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"FAQs",id:"faqs",level:2},{value:"What is the main advantage of using GraphQL in microservices migration?",id:"what-is-the-main-advantage-of-using-graphql-in-microservices-migration",level:3},{value:"Can I use GraphQL with existing REST APIs?",id:"can-i-use-graphql-with-existing-rest-apis",level:3},{value:"Is GraphQL secure?",id:"is-graphql-secure",level:3},{value:"How does GraphQL improve performance in microservices?",id:"how-does-graphql-improve-performance-in-microservices",level:3}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"In the rapidly evolving world of software development, scalability and maintainability are crucial for a company's success. The monolithic architecture, which once served organizations well, is increasingly becoming a bottleneck as applications grow in complexity and scale. Many organizations are shifting towards microservices to address these challenges, but migration is often fraught with complexity, particularly in areas like data management, service communication, and deployment."}),"\n",(0,n.jsx)(i.p,{children:"GraphQL, a query language for your API, offers a flexible and efficient way to interact with data, making it an ideal tool for easing the transition. This article will explore the intricacies of migrating from a monolithic architecture to microservices, the challenges involved, and how GraphQL can simplify the migration process."}),"\n",(0,n.jsx)(i.h2,{id:"understanding-monoliths-and-microservices",children:"Understanding Monoliths and Microservices"}),"\n",(0,n.jsx)(i.h3,{id:"what-is-a-monolithic-architecture",children:"What is a Monolithic Architecture?"}),"\n",(0,n.jsx)(i.p,{children:"A monolithic architecture is a traditional software development model where all components of an application are tightly coupled together and run as a single service. This architecture is characterized by:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Single Codebase:"})," The entire application\u2019s functionality is contained within one codebase."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Tightly Coupled Components:"})," All modules are interdependent, meaning a change in one module can affect the entire system."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Single Deployment Unit:"})," The entire application is deployed as a single unit, making scaling a challenge."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Monolithic architectures are straightforward to develop initially but become increasingly difficult to manage as the application grows. Changes to one part of the system require rebuilding and redeploying the entire application, leading to slower development cycles and potential downtime."}),"\n",(0,n.jsx)(i.h3,{id:"what-are-microservices",children:"What are Microservices?"}),"\n",(0,n.jsx)(i.p,{children:"Microservices are a design pattern where an application is divided into smaller, independent services that communicate with each other through APIs. Key characteristics of microservices include:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Independently Deployable Services:"})," Each service can be developed, deployed, and scaled independently."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Decoupled Components:"})," Services are loosely coupled, meaning changes in one service typically do not impact others."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Domain-Driven Design:"})," Each microservice is aligned with a specific business function or domain."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Microservice architecture addresses many of the scalability and maintainability challenges of monolithic systems. However, it can introduce complexity in initial development."}),"\n",(0,n.jsx)(i.h3,{id:"why-migrate-from-monolith-to-microservices",children:"Why Migrate from Monolith to Microservices?"}),"\n",(0,n.jsx)(i.p,{children:"Migrating from a monolithic architecture to microservices offers several advantages:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Scalability:"})," Microservices allow you to scale individual components independently based on demand."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Agility:"})," Independent services enable faster development cycles and easier maintenance."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Resilience:"})," Failures in one service do not necessarily bring down the entire application."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Despite these advantages, the migration process is complex and requires careful planning and execution."}),"\n",(0,n.jsx)(i.h2,{id:"challenges-in-monolith-to-microservices-migration",children:"Challenges in Monolith to Microservices Migration"}),"\n",(0,n.jsx)(i.p,{children:"Migrating to microservices presents several challenges that organizations must address to ensure a successful transition."}),"\n",(0,n.jsx)(i.h3,{id:"data-management-and-consistency",children:"Data Management and Consistency"}),"\n",(0,n.jsx)(i.p,{children:"In a monolithic system, data is typically stored in a single database, making it easier to maintain consistency. In a microservice architecture, each service often has its database, leading to challenges in maintaining data consistency across services. Data integrity and managing distributed transactions are significant hurdles in the migration process."}),"\n",(0,n.jsx)(i.h3,{id:"service-communication",children:"Service Communication"}),"\n",(0,n.jsx)(i.p,{children:"Monolithic applications typically rely on in-process communication, which is efficient and straightforward. In a microservice architecture, services must communicate over a network, introducing latency and potential failures. Managing inter-service communication, especially in distributed environments, requires robust strategies such as service discovery, load balancing, and circuit breakers."}),"\n",(0,n.jsx)(i.h3,{id:"deployment-complexity",children:"Deployment Complexity"}),"\n",(0,n.jsx)(i.p,{children:"Deploying a monolithic application is relatively simple, as there is only one deployment unit. However, in a microservice architecture, each service must be deployed independently, often with different versions running simultaneously. Managing these deployments, along with continuous integration and continuous deployment (CI/CD) pipelines, adds significant complexity."}),"\n",(0,n.jsx)(i.h2,{id:"introduction-to-graphql",children:"Introduction to GraphQL"}),"\n",(0,n.jsx)(i.h3,{id:"what-is-graphql",children:"What is GraphQL?"}),"\n",(0,n.jsxs)(i.p,{children:["GraphQL is a query language and runtime for APIs that was developed by Facebook in 2012 and open-sourced in 2015. Unlike REST, which exposes multiple endpoints for different types of data, GraphQL allows clients to request exactly the data they need through a single endpoint. This flexibility makes GraphQL an excellent choice for applications with complex data needs.\n",(0,n.jsx)(i.a,{href:"/graphql/what-is-graphql/",children:"Read More..."})]}),"\n",(0,n.jsx)(i.h3,{id:"key-features-of-graphql",children:"Key Features of GraphQL"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Declarative Data Fetching:"})," Clients specify the shape and structure of the data they need, which only fetches the required data."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Single Endpoint:"})," All data queries are sent to a single endpoint, simplifying API design and usage."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Strong Typing:"})," GraphQL schemas are strongly typed, providing clear documentation and reducing errors."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"API Contract"})," GraphQL schema acts as a contract between the client and server, ensuring a clear understanding of data requirements."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"graphql-vs-rest",children:"GraphQL vs REST"}),"\n",(0,n.jsx)(i.p,{children:"While REST is based on a fixed set of endpoints that return specific data, GraphQL offers a Contract-First approach, which is crucial for decoupling the client and server. Which is very important so that your splitting of the monolith into microservices can be done without affecting the client."}),"\n",(0,n.jsxs)(i.p,{children:["To learn more about the differences between GraphQL and REST, read our article on ",(0,n.jsx)(i.a,{href:"/graphql/graphql-vs-rest-api-comparison/",children:"GraphQL vs REST"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"how-graphql-simplifies-microservices-migration",children:"How GraphQL Simplifies Microservices Migration"}),"\n",(0,n.jsx)(i.h3,{id:"unified-data-access-layer",children:"Unified Data Access Layer"}),"\n",(0,n.jsx)(i.p,{children:"GraphQL provides a unified data access layer that abstracts the underlying microservices. This means that clients interact with a single GraphQL API, which then fetches and aggregates data from various microservices. This abstraction layer hides the complexity of the underlying architecture from clients, making the transition from a monolithic system smoother and less disruptive."}),"\n",(0,n.jsx)(i.p,{children:"Let's take a look at this example using Tailcall:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-graphql",children:'schema {\n  query: Query\n}\n\ntype Query {\n  users(id: Int!): User\n    @http(\n      baseURL: "https://users.example.com"\n      path: "/users/{{.args.id}}"\n    )\n}\n\ntype User {\n  id: Int!\n  name: String!\n  orders: [Order]\n    @http(\n      baseURL: "https://orders.example.com"\n      path: "/users/{{.value.id}/orders"\n    )\n}\n\ntype Order {\n  id: Int!\n  userId: Int!\n  total: Int!\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"In this specification, the services that handle user accounts and store orders may be separate, while offering data for both under a unified API. This allows for a gradual migration of services without disrupting the client interface. Clients can continue to interact with the GraphQL API, even as the underlying services evolve."}),"\n",(0,n.jsx)(i.h3,{id:"efficient-data-fetching",children:"Efficient Data Fetching"}),"\n",(0,n.jsx)(i.p,{children:"In microservice architectures, data is often spread across multiple services. GraphQL\u2019s ability to request only the data needed in a single query reduces the need for multiple round trips to different services, improving performance and reducing latency."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-graphql",children:"query {\n  users {\n    orders {\n      total\n    }\n  }\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["This query fetches only the ",(0,n.jsx)(i.code,{children:"total"})," of each user's order, optimizing the data transfer and reducing the load on the network."]}),"\n",(0,n.jsx)(i.h3,{id:"schema-stitching-and-federation",children:"Schema Stitching and Federation"}),"\n",(0,n.jsx)(i.p,{children:"GraphQL supports schema stitching and federation, which allow you to combine multiple GraphQL schemas into a single schema. This is particularly useful in microservice architectures, where each service might expose its own GraphQL schema. By stitching these schemas together, you can present a unified API to clients, further simplifying the migration process."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-graphql",children:'extend type Order {\n  sellerId: Int!\n  seller: Seller @http(path: "/sellers/{{.value.sellerId}}")\n}\n\ntype Seller {\n  id: Int!\n  name: String!\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:["In this example, the ",(0,n.jsx)(i.code,{children:"Order"})," type is extended with a ",(0,n.jsx)(i.code,{children:"seller"})," field, which could be fetched from a separate microservice for seller accounts, all integrated into a single schema."]}),"\n",(0,n.jsx)(i.h3,{id:"gradual-migration-support",children:"Gradual Migration Support"}),"\n",(0,n.jsxs)(i.p,{children:["One of the most significant advantages of using GraphQL in your migration strategy is its support for gradual migration. You can introduce ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"a GraphQL layer on top of your existing monolithic system and then incrementally refactor parts of the monolith into microservices"})}),". The GraphQL layer can continue to serve clients, even as the underlying architecture evolves, minimizing disruption to users."]}),"\n",(0,n.jsx)(i.h2,{id:"step-by-step-guide-to-using-graphql-in-your-migration",children:"Step-by-Step Guide to Using GraphQL in Your Migration"}),"\n",(0,n.jsx)(i.h3,{id:"analyze-your-monolith",children:"Analyze Your Monolith"}),"\n",(0,n.jsx)(i.p,{children:"Begin by analyzing your monolithic application to identify the domains and boundaries within the codebase. This will help you determine how to decompose the monolith into microservices. Look for areas of the code that are highly coupled and those that are relatively isolated."}),"\n",(0,n.jsx)(i.h3,{id:"implement-graphql-layer",children:"Implement GraphQL Layer"}),"\n",(0,n.jsx)(i.p,{children:"Implement a GraphQL API that sits on top of your monolithic application. This API will serve as the single point of entry for clients, allowing you to start refactoring the monolith without disrupting the client interface."}),"\n",(0,n.jsx)(i.h3,{id:"design-your-microservice-architecture",children:"Design Your Microservice Architecture"}),"\n",(0,n.jsx)(i.p,{children:"Next, design your microservice architecture based on the analysis. Define the services, their boundaries, and how they will communicate with each other. Ensure that each service is aligned with a specific business function or domain to maintain cohesion."}),"\n",(0,n.jsx)(i.h3,{id:"migrate-services-incrementally",children:"Migrate Services Incrementally"}),"\n",(0,n.jsx)(i.p,{children:"Start migrating functionalities from the monolith to microservices incrementally. As you extract services, update the GraphQL layer to fetch data from the newly created microservices instead of the monolith. This approach allows for a smooth transition with minimal impact on the end users."}),"\n",(0,n.jsx)(i.h3,{id:"test-and-optimize",children:"Test and Optimize"}),"\n",(0,n.jsx)(i.p,{children:"Throughout the migration process, continuously test the GraphQL API to ensure it functions correctly with both the monolithic and microservices-based backends. Optimize the GraphQL queries to ensure they are efficient and do not introduce unnecessary latency."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Steps to Gradually migrate Monolith to Microservices leveraging GraphQL",src:t(24914).A+"",width:"1537",height:"1139"})}),"\n",(0,n.jsx)(i.h2,{id:"best-practices-for-graphql-in-microservices-migration",children:"Best Practices for GraphQL in Microservices Migration"}),"\n",(0,n.jsx)(i.h3,{id:"use-strong-type-system",children:"Use Strong Type System"}),"\n",(0,n.jsx)(i.p,{children:"Leverage GraphQL\u2019s strong typing to ensure your API is well-defined and less prone to errors. Define your types and schema carefully to ensure they align with your domain model and business logic."}),"\n",(0,n.jsx)(i.h3,{id:"implement-proper-error-handling",children:"Implement Proper Error Handling"}),"\n",(0,n.jsx)(i.p,{children:"Ensure that your GraphQL API has robust error handling in place. Provide meaningful error messages to clients and ensure that failures in one microservice do not cascade and affect the entire API."}),"\n",(0,n.jsx)(i.h3,{id:"optimize-performance-with-caching",children:"Optimize Performance with Caching"}),"\n",(0,n.jsx)(i.p,{children:"Implement caching strategies within your GraphQL layer to improve performance. This can be done at various levels, including query result caching, response caching, and even partial query caching."}),"\n",(0,n.jsx)(i.h3,{id:"ensure-security-measures",children:"Ensure Security Measures"}),"\n",(0,n.jsx)(i.p,{children:"Security is critical when migrating to microservices, especially when introducing a new API layer like GraphQL. Implement proper authentication and authorization mechanisms. Additionally, consider rate limiting, input validation, and other security best practices to protect your GraphQL API."}),"\n",(0,n.jsx)(i.h2,{id:"successful-migration-stories-using-graphql",children:"Successful Migration Stories Using GraphQL"}),"\n",(0,n.jsx)(i.h3,{id:"netflix",children:"Netflix"}),"\n",(0,n.jsxs)(i.p,{children:["In 2021, Netflix published a ",(0,n.jsx)(i.a,{href:"https://netflixtechblog.com/beyond-rest-1b76f7c20ef6",children:"blog post"})," detailing the company\u2019s adoption of GraphQL. Netflix encountered performance challenges as it expanded globally, requiring a more efficient way to manage data interactions between microservices. By integrating GraphQL as a central data layer, Netflix reduced the number of network requests and minimized data transfer, significantly lowering latency. This improvement allowed Netflix to deliver content more efficiently, maintaining high customer satisfaction across a growing user base."]}),"\n",(0,n.jsx)(i.h3,{id:"github",children:"GitHub"}),"\n",(0,n.jsxs)(i.p,{children:["GitHub needed a more flexible and user-friendly API to meet increasing demands. By adopting GraphQL, they replaced their monolithic REST API with a single, unified API layer, allowing developers ",(0,n.jsx)(i.a,{href:"https://docs.github.com/en/graphql/overview/about-the-graphql-api",children:"to query only the data they needed"}),". This transition improved efficiency, reduced the complexity of API version management, and enabled GitHub to introduce new features more seamlessly."]}),"\n",(0,n.jsx)(i.h3,{id:"airbnb",children:"Airbnb"}),"\n",(0,n.jsxs)(i.p,{children:["Airbnb faced inefficiencies with its monolithic architecture, as multiple REST API calls were needed to fetch data, leading to slow response times. In response, they entered ",(0,n.jsx)(i.a,{href:"https://www.infoq.com/news/2019/12/airbnb-graphql-migration/",children:"a close partnership with Apollo"}),". By implementing GraphQL as a unified data layer on top of their microservices, Airbnb reduced the number of API calls and improved performance. This allowed for more effective scaling and a better user experience while enabling independent development across teams."]}),"\n",(0,n.jsx)(i.h3,{id:"shopify",children:"Shopify"}),"\n",(0,n.jsxs)(i.p,{children:["Shopify's monolithic REST API became a bottleneck as their platform grew in complexity. To address this, ",(0,n.jsx)(i.a,{href:"https://thenewstack.io/why-shopify-favors-graphql-over-rest-for-its-apis/",children:"they introduced GraphQL to their tech stack"}),", which provided a more flexible and powerful API. This enabled developers to request exactly the data they needed, improving efficiency and supporting larger merchants. The strong typing and introspection features of GraphQL also enhanced API documentation, fostering greater innovation among developers."]}),"\n",(0,n.jsx)(i.h3,{id:"pinterest",children:"Pinterest"}),"\n",(0,n.jsxs)(i.p,{children:["Pinterest needed to scale its monolithic architecture while continuing to innovate. They used GraphQL as an intermediary layer during their migration to microservices, ",(0,n.jsx)(i.a,{href:"https://graphql.org/conf/2024/schedule/515c8ade2da6e1fc710e87df182dd8e6/",children:"allowing for a gradual transition"})," without disrupting the user experience. This approach enabled Pinterest to decouple its front end from the back end, facilitating independent development and smoother scaling."]}),"\n",(0,n.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(i.p,{children:"Migrating from a monolithic architecture to microservices is a complex but rewarding process. By leveraging GraphQL, organizations can ease the transition, maintain a consistent API for clients, and gradually refactor their systems without significant disruption. The flexibility and efficiency of GraphQL make it a powerful tool for navigating the challenges of modern software architecture."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://tailcall.run/contact/",children:"Contact us today"})," to learn more about how Tailcall can help you overcome Monolith to Microservices Migration challenges using GraphQL."]}),"\n",(0,n.jsx)(a.A,{title:"Simplify your Microservices migration with Tailcall",subtitle:"Try Tailcall today",buttonText:"Get Started",backgroundImageSrc:"/icons/basic/bg-tailcall.svg"}),"\n",(0,n.jsx)(i.h2,{id:"faqs",children:"FAQs"}),"\n",(0,n.jsx)(i.h3,{id:"what-is-the-main-advantage-of-using-graphql-in-microservices-migration",children:"What is the main advantage of using GraphQL in microservices migration?"}),"\n",(0,n.jsx)(i.p,{children:"GraphQL provides a unified API layer that abstracts the complexity of the underlying microservices, allowing for a smoother and less disruptive migration process."}),"\n",(0,n.jsx)(i.h3,{id:"can-i-use-graphql-with-existing-rest-apis",children:"Can I use GraphQL with existing REST APIs?"}),"\n",(0,n.jsx)(i.p,{children:"Yes, GraphQL can be layered on top of existing REST APIs, allowing you to gradually transition to a more flexible API architecture."}),"\n",(0,n.jsx)(i.h3,{id:"is-graphql-secure",children:"Is GraphQL secure?"}),"\n",(0,n.jsx)(i.p,{children:"Yes, but it requires proper security measures such as authentication, authorization, and rate limiting to ensure that the API is protected from threats."}),"\n",(0,n.jsx)(i.h3,{id:"how-does-graphql-improve-performance-in-microservices",children:"How does GraphQL improve performance in microservices?"}),"\n",(0,n.jsx)(i.p,{children:"GraphQL allows clients to request only the data they need in a single query, reducing the number of round trips and the amount of data transferred over the network."})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97719:(e,i,t)=>{t.d(i,{A:()=>p});var n,r=t(96540),a=t(3528),s=t(10737),o=t(75957),l=t(22375);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(null,arguments)}const h=e=>{let{title:i,titleId:t,...a}=e;return r.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:740,height:190,fill:"none",viewBox:"0 0 740 190","aria-labelledby":t},a),i?r.createElement("title",{id:t},i):null,n||(n=r.createElement("g",{fill:"#CECECF"},r.createElement("path",{d:"M51.336 186.568q-12.906 0-21.071-7.902-7.902-8.165-7.902-21.598V83.32h-32.66V55.927h32.66V15.365H55.55v40.562h35.821V83.32h-35.82v67.954q0 7.9 7.374 7.901h25.286v27.393zM151.438 190.255q-13.96 0-25.022-4.741-11.062-5.004-17.647-14.223-6.321-9.481-6.321-22.915 0-13.432 6.321-22.388 6.585-9.218 17.911-13.696 11.589-4.74 26.339-4.741h35.82v-7.375q0-9.218-5.794-15.013-5.795-6.058-18.437-6.058-12.38 0-18.438 5.795-6.057 5.53-7.901 14.486l-30.553-10.272q3.16-10.008 10.008-18.174 7.112-8.428 18.701-13.433 11.852-5.267 28.709-5.267 25.812 0 40.826 12.906 15.013 12.905 15.013 37.401v48.727q0 7.9 7.375 7.901h10.535v27.393h-22.124q-9.746 0-16.067-4.741t-6.321-12.643v-.263h-5.005q-1.053 3.16-4.741 8.428-3.687 5.004-11.589 8.955t-21.598 3.951m5.795-26.865q13.96 0 22.651-7.639 8.955-7.9 8.955-20.807v-2.634h-33.45q-9.219 0-14.486 3.951t-5.268 11.062 5.531 11.589q5.53 4.478 16.067 4.478M252.612 186.568V55.928h33.187v130.64zm16.594-145.917q-8.955 0-15.277-5.795-6.057-5.794-6.058-15.277 0-9.48 6.058-15.276 6.322-5.795 15.277-5.795 9.219 0 15.276 5.795 6.058 5.794 6.058 15.277 0 9.48-6.058 15.276t-15.276 5.795M312.039 186.568V2.196h33.187v184.372zM432.836 190.255q-18.964 0-34.504-7.901-15.276-7.902-24.232-22.915t-8.955-36.348v-3.687q0-21.335 8.955-36.348t24.232-22.915q15.54-7.9 34.504-7.901 18.7 0 32.134 6.584 13.433 6.585 21.597 18.174 8.429 11.326 11.063 25.812l-32.134 6.848q-1.053-7.9-4.741-14.223-3.687-6.321-10.535-10.008-6.585-3.688-16.594-3.688-10.008 0-18.174 4.478-7.901 4.214-12.642 12.906-4.478 8.429-4.478 20.807v2.634q0 12.38 4.478 21.071 4.74 8.428 12.642 12.906 8.166 4.215 18.174 4.215 15.013 0 22.652-7.639 7.901-7.9 10.008-20.544l32.134 7.638q-3.425 13.96-11.853 25.549-8.164 11.327-21.597 17.91-13.434 6.585-32.134 6.585M555.822 190.255q-13.96 0-25.022-4.741-11.062-5.004-17.647-14.223-6.321-9.481-6.321-22.915 0-13.432 6.321-22.388 6.585-9.218 17.911-13.696 11.589-4.74 26.338-4.741h35.821v-7.375q0-9.218-5.794-15.013-5.795-6.058-18.437-6.058-12.38 0-18.438 5.795-6.057 5.53-7.901 14.486L512.1 89.114q3.16-10.008 10.008-18.174 7.112-8.428 18.701-13.433 11.853-5.267 28.709-5.267 25.812 0 40.826 12.906 15.013 12.905 15.013 37.401v48.727q0 7.9 7.375 7.901h10.535v27.393h-22.124q-9.746 0-16.067-4.741-6.322-4.741-6.322-12.643v-.263h-5.004q-1.053 3.16-4.741 8.428-3.687 5.004-11.589 8.955t-21.598 3.951m5.795-26.865q13.96 0 22.651-7.639 8.955-7.9 8.955-20.807v-2.634h-33.45q-9.22 0-14.486 3.951-5.268 3.95-5.268 11.062t5.531 11.589q5.53 4.478 16.067 4.478M656.996 186.568V2.196h33.187v184.372zM716.423 186.568V2.196h33.187v184.372z"}))))};var d=t(74848);const p=e=>{let{title:i,subtitle:t,buttonText:n}=e;return(0,d.jsx)("section",{className:"flex flex-col justify-center px-4 py-4 max-w-3xl mx-auto",children:(0,d.jsxs)("div",{className:"relative flex flex-col max-md:space-y-6 md:flex-row md:items-center p-8 bg-neutral-900 rounded-2xl overflow-hidden max-md:p-6",children:[(0,d.jsx)(h,{className:"absolute inset-0 w-full h-full object-cover opacity-5 z-0 max-w-none max-h-none"}),(0,d.jsxs)("div",{className:"relative z-10 flex flex-col flex-1 space-y-2.5 text-center max-md:text-left md:text-left",children:[(0,d.jsx)("h2",{className:"text-3xl font-bold leading-tight text-white sm:text-4xl",children:i}),(0,d.jsx)("p",{className:"text-base leading-relaxed text-zinc-400 sm:text-lg",children:t})]}),(0,d.jsx)("div",{className:"relative z-10 mt-6 max-md:w-full max-md:flex max-md:justify-center md:mt-0 md:ml-6 md:flex-shrink-0",children:(0,d.jsx)(a.A,{title:n,href:s.$.docs,theme:o.Sx.Tailcall,width:"auto",onClick:()=>(0,l.p8)("Blog","Click","Get Started")})})]})})}},3528:(e,i,t)=>{t.d(i,{A:()=>s});var n=t(28774),r=t(75957),a=(t(96540),t(74848));const s=e=>{let{title:i,Icon:t,theme:s,onClick:o,href:l,width:c="auto",disabled:h}=e;return(0,a.jsxs)(n.A,{to:l,onClick:o,className:`\n      group relative disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center gap-x-SPACE_03 hover:no-underline rounded-lg sm:rounded-xl h-12 sm:h-16 text-content-small font-bold sm:text-title-small cursor-pointer px-SPACE_06 py-SPACE_03 sm:px-SPACE_08 lg:px-SPACE_10 sm:py-SPACE_04 lg:py-SPACE_05\n      ${(()=>{switch(c){case"small":return"w-[228px]";case"medium":return"w-[300px]";case"large":return"w-[500px]";default:return"w-fit"}})()} \n      ${({[r.Sx.Light]:{classes:"border border-solid border-tailCall-border-dark-100 text-tailCall-dark-500 bg-transparent hover:text-tailCall-dark-500",gridClasses:""},[r.Sx.Dark]:{classes:"border-2 border-solid border-tailCall-border-dark-100 text-tailCall-light-100 bg-white hover:text-tailCall-light-100",gridClasses:""},[r.Sx.Gray]:{classes:"border-2 border-solid border-tailCall-light-100 text-tailCall-light-100 bg-transparent hover:text-tailCall-light-100",gridClasses:"hidden"},[r.Sx.Tailcall]:{classes:"bg-yellow-300 border border-solid text-tailCall-dark-500 bg-transparent hover:text-tailCall-dark-500",gridClasses:""}}[s]||{classes:"",styles:"",gridClasses:""}).classes??""} \n      ${h?"cursor-not-allowed opacity-20":""} `,children:[(d=s,d===r.Sx.Dark||d===r.Sx.Gray?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"lg:block rounded-md lg:rounded-lg absolute inset-0 w-full bg-tailCall-dark-500 group-hover:lg:scale-x-[0.98] group-hover:lg:scale-y-[0.95] transform transition-all ease-out duration-250"}),!h&&(0,a.jsx)("div",{className:"hidden lg:block button-grid-bg-section h-full w-full scale-90 opacity-0 group-hover:scale-[0.98] group-hover:opacity-100 transform transition-all ease-out duration-250"})]}):d!==r.Sx.Light||h?null:(0,a.jsx)("div",{className:"hidden lg:block button-grid-bg-section-dark h-full w-full scale-90 opacity-0 group-hover:scale-[1] group-hover:opacity-100 transform transition-all ease-out duration-250"})),t&&(0,a.jsx)(t,{className:"w-6 h-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8 text-white z-[1]"}),i&&(0,a.jsxs)("span",{className:"z-20",children:[" ",i]})]});var d}},24914:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/monolith-to-microservices-fb96366f894684422eb2d07d4881d009.png"},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>o});var n=t(96540);const r={},a=n.createContext(r);function s(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);