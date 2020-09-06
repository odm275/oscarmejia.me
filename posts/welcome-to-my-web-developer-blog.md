---
tags:
  - drupal
published: false
date: 2020-08-27T04:16:35.523Z
title: Migrating from Drupal 7 to Drupal 8 Part 0 via XML
---
This tutorial will cover common techniques for migrating different types of fields when performing a Drupal Migration with the core Migrations module. We will cover  fields in increasing complexity. This includes different types of fields(text, geofield, address, multi value, entity references, and more), and taxonomies. 

This tutorial will migrate its content from an XML feed though most of these concepts have close to if not identical analogs in the case of JSON or CSV. 

## Before getting started:
Download and enable migrate_plus and migrate_tools modules.

Migration is split into two parts, sourcing and destination. In the sourcing, we get exact field from the xml feed, and name it. In the destination, we process the field as needed and resolve it into our database.


![drupal 7 to 8](assets/d7tod8-opt.png "Drupal 7 to 8")