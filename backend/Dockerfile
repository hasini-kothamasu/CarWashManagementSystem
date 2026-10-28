FROM eclipse-temurin:17-jdk AS build

WORKDIR /app

COPY backend/.mvn/ .mvn/
COPY backend/mvnw backend/pom.xml ./

RUN chmod +x mvnw
RUN ./mvnw -DskipTests dependency:go-offline

COPY backend/src/ src/

RUN ./mvnw -DskipTests package

FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

CMD ["sh", "-c", "java -Dserver.port=${PORT:-8080} -jar app.jar"]