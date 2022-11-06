# 5G-IOT Smart City Interface

## Authors
Project Supervior: Dr Abdur Forkan

Students:

* Chuong Ho (101921623)

* Mir Aun Ali (102878018)

## Project description
The project objective is to develop a scalable and interactive interface to visualise the 5G performance in the city of Brimbank.
Our visual interface has the following features
* Use-case 1. Display and compare different 5G performance parameters for different geographical locations and time.
* Use-case 2. Display and compare different 5G performance aggregated at the suburb level.
* Use-case 3. Highlight the correlation between truck speed with the 5G performance.
* Use-case 4. Explore the correlation between weather conditions, including rain levels, wind speeds and cloud levels with the 5G performance.
* Use-case 5. Explore how the 5G performance varies at different hours in a day.

## Project installation
### Method 1. Install locally in your computer (Recommended)

```bash
git clone https://github.com/hd-chuong/COS40004-5GIOT.git

cd COS40004-5GIOT

python -m http.server 8123
```

After the localhost server is ready, access the visualisations based upon your interested use-cases.

| Use case | URL |
|:--------:|:---:|
| 1 | http://localhost:8123/suburb-performance/suburb-performance.html |
| 2 | http://localhost:8123/suburb-performance/suburb-performance.html |