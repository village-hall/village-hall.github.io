/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  hallSidebar: [
    {type: 'doc', id: 'prices' },
    {type: 'doc', id: 'news' },
    {type: 'doc', id: 'sports-club' },
    {
      type: 'category',
      label: 'Tilton Electric Car Club',
      collapsible: true,
      collapsed: false,
      items: [
        'car-club/car-club',
        'car-club/need-a-lift',
        'car-club/monthly-meet',
        'car-club/pet-policy'
      ],
    },
  ],
};

module.exports = sidebars;
