---
name: data-analysis
description: Analyze data, generate insights, create reports, and perform statistical analysis. Use when working with datasets, CSV files, Excel files, JSON data, or when user mentions data analysis, statistics, trends, patterns, or insights.
model: claude-haiku-4-5-20251001
allowed-tools: Read, Write, Edit, Glob, Grep, TodoWrite, mcp__ide__executeCode
---

# Data Analysis Skill

This skill provides comprehensive data analysis capabilities including data exploration, statistical analysis, pattern recognition, and insight generation for various data formats.

## When Claude Uses This Skill

Claude automatically applies this skill when you:
- Ask to analyze datasets (CSV, Excel, JSON files)
- Want to understand trends and patterns in data
- Need statistical summaries or reports
- Mention data analysis, statistics, or insights
- Request data visualizations or charts
- Need help with data cleaning or quality assessment

## Capabilities

### Supported Data Formats
- **CSV files** - Most common format for tabular data
- **Excel files** (.xlsx, .xls) - Spreadsheet data with multiple sheets
- **JSON files** - Structured data from APIs or applications
- **Pandas DataFrames** - In-memory data structures
- **Time series data** - Date/time indexed datasets
- **Survey data** - Questionnaire responses and feedback

### Analysis Types
- **Descriptive Statistics**: Mean, median, mode, standard deviation, quartiles, ranges
- **Trend Analysis**: Time series patterns, seasonality detection, growth rates
- **Correlation Analysis**: Relationships between variables, correlation matrices
- **Pattern Recognition**: Anomaly detection, clustering, data segmentation
- **Statistical Testing**: Hypothesis tests, confidence intervals, significance testing
- **Data Quality Assessment**: Missing values, outliers, consistency checks

### Visualizations Created
- **Line charts** for trends over time
- **Bar/column charts** for comparisons between categories
- **Scatter plots** for correlations and relationships
- **Histograms** for data distributions
- **Box plots** for statistical summaries and outliers
- **Heatmaps** for correlation matrices and patterns

## Analysis Process

When you request data analysis, I follow this systematic approach:

### 1. Data Intake & Understanding
- Load the dataset and examine its structure
- Identify data types, columns, and dimensions
- Understand the business context and goals

### 2. Data Quality Assessment
- Check for missing values, duplicates, and inconsistencies
- Identify outliers and potential data entry errors
- Assess completeness and reliability

### 3. Exploratory Data Analysis
- Generate summary statistics for all variables
- Create initial visualizations to understand distributions
- Identify interesting patterns or anomalies

### 4. Focused Analysis
- Dive deeper into specific questions or hypotheses
- Perform relevant statistical tests
- Create targeted visualizations

### 5. Insight Generation
- Translate statistical findings into business insights
- Identify actionable recommendations
- Highlight key trends, risks, and opportunities

### 6. Reporting & Documentation
- Create structured analysis reports
- Document methodology and assumptions
- Present findings with supporting evidence

## Output Format

My analysis reports include:

### Executive Summary
Key findings and recommendations in 2-3 sentences for decision makers.

### Data Overview
- Dataset description and source information
- Time period covered and key dimensions
- Data quality notes and limitations

### Key Findings
- 📊 **Primary Insights**: Most important discoveries with data support
- 📈 **Trend Analysis**: Temporal patterns, changes, and projections
- 🔍 **Notable Patterns**: Interesting relationships or anomalies
- ⚠️ **Concerns**: Issues, risks, or red flags identified

### Statistical Summary
Relevant statistics, confidence intervals, and test results with interpretation.

### Visualizations
Charts and graphs that clearly illustrate key findings.

### Recommendations
Specific, actionable next steps based on the analysis.

### Technical Notes
Methodology, assumptions, limitations, and areas for further investigation.

## Examples of Usage

### Sales Performance Analysis
```
"Analyze our quarterly sales data to identify trends and top-performing regions"
```
**Output**: Revenue trends, regional comparisons, product performance, seasonal patterns

### Customer Behavior Study
```
"Help me understand user engagement patterns from our app analytics"
```
**Output**: Usage patterns, retention analysis, user segmentation, churn indicators

### Survey Results Analysis
```
"Summarize our customer satisfaction survey responses and identify key themes"
```
**Output**: Sentiment analysis, demographic breakdowns, satisfaction drivers, improvement areas

### Financial Data Review
```
"Examine our expense data to find cost-saving opportunities"
```
**Output**: Spending patterns, budget variances, cost centers analysis, optimization recommendations

## Technical Implementation

This skill leverages powerful Python libraries:
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computations and array operations
- **Matplotlib/Seaborn** - Statistical visualization and charting
- **SciPy** - Statistical tests and scientific computing
- **Jupyter Integration** - Interactive code execution and notebooks

## Best Practices I Follow

- **Data Quality First**: Always assess and communicate data limitations
- **Appropriate Methods**: Use statistical techniques suited to the data type and sample size
- **Visual Communication**: Create clear, informative charts that support insights
- **Business Context**: Focus on actionable insights rather than just interesting patterns
- **Transparent Reporting**: Include confidence levels, assumptions, and methodology
- **Reproducible Analysis**: Document steps for verification and replication

## Error Handling & Limitations

I gracefully handle common issues:
- **Missing Data**: Multiple imputation strategies and impact assessment
- **File Format Issues**: Automatic detection and conversion
- **Large Datasets**: Memory-efficient processing and sampling techniques
- **Statistical Assumptions**: Validation and alternative approaches when violated
- **Interpretation Boundaries**: Clear communication of uncertainty and limitations

When data is insufficient for certain analyses, I'll explain why and suggest alternatives or additional data collection strategies.

## Getting Started

To use this skill, simply:
1. **Upload or reference your data file**
2. **Describe what you want to understand** (trends, patterns, insights)
3. **Specify any particular focus areas** (time periods, segments, metrics)
4. **I'll handle the rest** - from loading data to generating insights

The skill works best when you provide context about your business goals and any specific questions you're trying to answer with the data.