# Pendo QE Test Site
## Used for agent/guide testing in all environments. Also primary target for RainforestQA Tests.

Uses Jekyll to create static site template.
Served through github.
https://jekyllrb.com/docs/home/

### Setup

Ruby Gems: https://rubygems.org/pages/download

`gem install jekyll`\
`gem install bundler`\
`bundle install`


### Local Execution

`bundle exec jekyll serve`  to run locally on 127.0.0.1:4000\
`bundle exec jekyll serve --watch` to debug.

### Using setup.html and rfqaSetup.html

#### Setup.html
This is the base setup file. It has five fields, three of which need to be filled out in order to sync up to a Pendo subscription.
1. GCS Bucket (hint: cdn.pendo.io): This is where you enter the GCS bucket for your server. This is found in the install snippet in the subscription.

* Pendo-Dev: pendo-dev-static.storage.googleapis.com
* Pendo-Widlings: pendo-wildlings-static.storage.googleapis.com
* Pendo-Test: pendo-test-static.storage.googleapis.com
* Production: cdn.pendo.io

2. apiKey: This is the apiKey for your subscription. Also found in the Pendo snippet on your subscription.
3. Visitor Id: Some visitor id. It just needs a value so it can tie events to a visitor.
4. Email Address (optional): Additional metadata. Not required.
5. Account (optional): An account name. If the sub has parent accounts, it needs to be in the `parent::account` format.

#### rfqaSetup.html
This is a setup file specific to RFQA on Pendo-Test. As such, the GCS bucket, apiKey, and Account are hard-coded. Just fill in a visitorID. It will always point to the `RainforestQA` subscription on Pendo-Test.