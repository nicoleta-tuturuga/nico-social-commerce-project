FROM maven as MAVEN
COPY pom.xml /tmp/
COPY src /tmp/src/
WORKDIR /tmp/
RUN mvn clean install -DskipTests=true

FROM openjdk:11
COPY --from=MAVEN /tmp/target/social-commerce-0.0.1-SNAPSHOT.jar social-commerce-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD java -jar social-commerce-0.0.1-SNAPSHOT.jar