FROM eclipse-temurin:17-jdk AS build
WORKDIR /app

COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw -DskipTests dependency:go-offline

COPY src/ src/
RUN ./mvnw -DskipTests package

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
CMD ["sh", "-c", "java -Dserver.port=${PORT:-8080} -jar app.jar"]

### Step 2: Save and push it to GitHub

Open the VS Code terminal at the project root:

```powershell
cd C:\Users\krishna\Downloads\carwash
git add backend/Dockerfile
git commit -m "Add Dockerfile for backend deployment"
git push