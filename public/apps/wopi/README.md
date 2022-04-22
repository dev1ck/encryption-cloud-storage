# Integration with Microsoft Office Online

[![Build Status](https://drone.owncloud.com/api/badges/owncloud/wopi/status.svg?branch=master)](https://drone.owncloud.com/owncloud/wopi)

Collaboratively work with Office documents in the browser.

With Microsoft Office Online users can work with Office documents in the browser. The extension connects ownCloud with Microsoft Office Online Server via the WOPI protocol. Please note that a Microsoft Office Online Server is required to use the integration. Out-of-the box only the on-premise version of Microsoft Office Online Server is supported.

## Setup
You need an [OfficeOnline Server](https://docs.microsoft.com/de-de/officeonlineserver/deploy-office-online-server) installed.

The app supports all current versions which are supported by Microsoft. When new versions are released they will work as long as the API doesn't change on the Microsoft side. As WOPI is a standard, this is not likely. Often there will be networking issues at the customer side which need debugging. Please reproduce if those occur.

All involved servers (OfficeOnline Server and the ownCloud server) need to be accessible by HTTPS with valid certificates.

Add the following to config.php:
```
'wopi.token.key' => 'replace-with-your-own-random-string',
'wopi.office-online.server' => 'https://your.office.online.server.tld',
```

## Developing

The integration is based on the [Web Application Open Platform Interface (WOPI)](https://wopi.readthedocs.io/en/latest/).
This app provides a WOPI endpoint for Microsoft Office Online to communicate with ownCloud.

## How to run the wopi-validator on a local setup for testing?

0. Make sure your local owncloud test system is reachable via the docker host ip (use ifconfig to find out)
1. Create an empty file named test.wopitest in user folder e.g. `curl -s -d "" -X PUT http://localhost:8080/remote.php/dav/files/admin/test.wopitest -u admin:admin`
2. Generate wopi token env `./occ wopi:get-token -o env admin test.wopitest http://localhost:8080/index.php > wopi.env`
3. Source env `source wopi.env`
4. Run testsuite (select specific with e.g. -e WOPI_TESTGROUP=FileVersion) `docker run --add-host="localhost:123.456.789" -e WOPI_URL=$WOPI_URL -e WOPI_TOKEN=$WOPI_TOKEN -e WOPI_TESTGROUP=FileVersion deepdiver/wopi-validator-core-docker:use-different-branch-to-make-ci-finally-green`

