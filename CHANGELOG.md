# Changelog

## 1.1.3
* Add validateToken Function to easy validate the current Token.


## 1.1.0

### Features
* Add **Certificates** object class
    * Allow create / list / get / delete of certificates
* Updated **Load Balancer** object class with new Certificate Information. *Will be further optimized in next Version*


## 1.0.0

### Breaking changes
* Rename **PaaS** object classes to fit the naming schema
    * PAASSecurityZone -> PaasSecurityZone
    * PAASService -> PaasService
    * PAASServiceMetrics -> PaasServiceMetrics
    * PAASServiceTemplate -> PaasServiceTemplate
* Rename **Backupcenter** response fields from camelCase to underscore_case to fit all the other responses
* Rename **Marketplace** class to **MarketplaceApplication** to fit the naming schema

### Features
* Bundle typescript type definitions and schemas
* Add a script to update types and schemas from official API spec (`updateFromSpec`)
* Add scripts for npm package build (`build`) and browser build (`build-browser`)
* **Storage:** add storage variant to request payload

### Maintenance
* Tidy up code
* Tidy up 3rd party packages
* Update 3rd party packages
* Tidy up README