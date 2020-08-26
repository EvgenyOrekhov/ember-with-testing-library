import Application from 'ember-with-testing-library/app';
import config from 'ember-with-testing-library/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
