# Workflow App
The app consists of 2 "features":

## 1. Autotagging

Admin can define a list of conditions which have to be met, and then a Tag is assigned to a file when uploading. The list of conditions is similar to Firewall.

> ![Autotagging](https://cloud.githubusercontent.com/assets/213943/12648203/19a0bb7c-c5d9-11e5-911f-71564c865d0b.png)

## 2. Retention
Admin can define a period of time for each tag. A daily background job deletes all files or subfiles which are older than the period and have the tag set on a parent or themselves.
Available options:

* Days
* Weeks (is replaced with 7 Days while storing)
* Months
* Years

> ![Retention](https://cloud.githubusercontent.com/assets/213943/12648080/86292154-c5d8-11e5-9d42-dff826d89711.png)

## QA metrics

[![Build Status](https://drone.owncloud.com/api/badges/owncloud/workflow/status.svg?branch=master)](https://drone.owncloud.com/owncloud/workflow)
