## Background
You have been tasked with creating a data pipeline to process and analyze the Toronto Transit Commission (TTC) routes and schedules data. The TTC provides publicly accessible data in CSV format, which includes information about routes, stops, schedules, and real-time updates.

## Challenge
Your goal is to design and implement a data pipeline that performs the following tasks using the TTC routes and schedules data:

### Data Ingestion
  
  Download the TTC routes and schedules data in CSV format from the official city website (Links provided below)
  Ingest the data into a data storage solution of your choice (e.g., local file system, cloud storage).

### Data Sources 

https://open.toronto.ca/dataset/ttc-routes-and-schedules/
https://open.toronto.ca/dataset/ttc-bus-delay-data/

#### Data Transformation

  Transform the raw CSV data into a structured format suitable for efficient querying and analysis.
  Data Analysis:
  Calculate the average number of stops per route.
  Identify the route with the most frequent schedule updates.
  Determine the average time delay of real-time updates across all routes.
  
#### Documentation

  Provide clear documentation outlining your data pipeline design, tools used, and any assumptions made.
  Include instructions for setting up and running your pipeline with sample data.


### Requirements

  Provide code/scripts to perform each step of the pipeline, including data ingestion, transformation, analysis, and storage.
  Include a sample SQL query that demonstrates how to retrieve information from the stored data for route analysis.

### Deliverables
Submit a compressed archive (e.g., ZIP or TAR) containing all the necessary files, well commented scripts, and documentation to execute your data pipeline using the TTC routes and schedules data. Additionally, provide a brief write-up (1-2 pages) summarizing your approach and highlighting key aspects of your design.
