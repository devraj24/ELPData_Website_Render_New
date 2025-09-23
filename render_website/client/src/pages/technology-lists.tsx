import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologyCategories = [
  {
    title: "Enterprise Applications",
    description: "Enterprise business applications and productivity software",
    items: [
      { name: "Microsoft Word Users", link: "/microsoft-word-users-list", count: "16.2K+" },
      { name: "Intuit Users", link: "/intuit-users-list", count: "12.9K+" },
      { name: "WordPress Users", link: "/wordpress-users-list", count: "12.6K+" },
      { name: "Intuit QuickBooks Users", link: "/intuit-quickbooks-users-list", count: "10.7K+" },
      { name: "Microsoft SharePoint Users", link: "/microsoft-sharepoint-users-list", count: "9.4K+" },
      { name: "Atlassian Users", link: "/atlassian-users-list", count: "7.2K+" },
      { name: "Kentico Users", link: "/kentico-users-list", count: "7.0K+" },
      { name: "Atlassian JIRA Users", link: "/atlassian-jira-users-list", count: "5.5K+" },
      { name: "Microsoft Project Users", link: "/microsoft-project-users-list", count: "5.0K+" },
      { name: "IBM Lotus Notes Users", link: "/ibm-lotus-notes-users-list", count: "4.8K+" },
      { name: "OpenText Users", link: "/opentext-users-list", count: "4.8K+" },
      { name: "Microsoft Exchange Users", link: "/microsoft-exchange-users-list", count: "4.6K+" }
    ]
  },
  {
    title: "ERP Systems",
    description: "Enterprise Resource Planning and business management systems",
    items: [
      { name: "SAP Users", link: "/sap-users-list", count: "368.7K+" },
      { name: "Oracle JD Edwards Users", link: "/jd-edwards-users-list", count: "47.9K+" },
      { name: "Sage Users", link: "/sage-users-list", count: "15.8K+" },
      { name: "Infor Users", link: "/infor-users-list", count: "8.4K+" },
      { name: "Sage Peachtree Users", link: "/sage-peachtree-users-list", count: "3.8K+" },
      { name: "Microsoft Dynamics AX Users", link: "/microsoft-dynamics-ax-users-list", count: "2.8K+" },
      { name: "Microsoft Dynamics NAV Users", link: "/microsoft-dynamics-nav-users-list", count: "2.7K+" },
      { name: "Oracle E-Business Suite Users", link: "/oracle-ebs-users-list", count: "2.4K+" },
      { name: "Oracle Hyperion Users", link: "/oracle-hyperion-users-list", count: "2.3K+" },
      { name: "Epicor Users", link: "/epicor-users-list", count: "2.2K+" },
      { name: "Microsoft Dynamics GP Users", link: "/microsoft-dynamics-gp-users-list", count: "2.2K+" },
      { name: "IBM Tivoli Maximo Users", link: "/ibm-tivoli-maximo-users-list", count: "2.0K+" }
    ]
  },
  {
    title: "Hardware",
    description: "Hardware manufacturers and technology infrastructure",
    items: [
      { name: "HP Users", link: "/hp-users-list", count: "23.1K+" },
      { name: "Apple Users", link: "/apple-users-list", count: "11.1K+" },
      { name: "Dell Users", link: "/dell-users-list", count: "7.4K+" },
      { name: "BlackBerry Users", link: "/blackberry-users-list", count: "4.8K+" },
      { name: "IBM Mainframe Users", link: "/ibm-mainframe-users-list", count: "3.7K+" },
      { name: "Primera Users", link: "/primera-users-list", count: "2.6K+" },
      { name: "BlackBerry Enterprise Server Users", link: "/blackberry-enterprise-server-users-list", count: "2.1K+" },
      { name: "Apple iPhone Users", link: "/apple-iphone-users-list", count: "2.0K+" },
      { name: "IBM Hardware Users", link: "/ibm-hardware-users-list", count: "1.9K+" },
      { name: "Citrix Hardware Users", link: "/citrix-hardware-users-list", count: "1.3K+" },
      { name: "EMC Hardware Users", link: "/emc-hardware-users-list", count: "1.2K+" },
      { name: "Veeam Users", link: "/veeam-users-list", count: "1.2K+" }
    ]
  },
  {
    title: "CRM & Marketing",
    description: "Customer relationship management and marketing automation platforms",
    items: [
      { name: "Salesforce Users", link: "/salesforce-users-list", count: "323.2K+" },
      { name: "Microsoft Dynamics CRM Users", link: "/microsoft-dynamics-crm-users-list", count: "3.3K+" },
      { name: "SugarCRM Users", link: "/sugarcrm-users-list", count: "3.2K+" },
      { name: "SalesForce CRM Users", link: "/salesforce-crm-users-list", count: "323.2K+" },
      { name: "Zendesk Users", link: "/zendesk-users-list", count: "2.6K+" },
      { name: "Oracle Siebel Users", link: "/oracle-siebel-users-list", count: "2.2K+" },
      { name: "Marketo Users", link: "/marketo-users-list", count: "1.4K+" },
      { name: "Genesys Opium Users", link: "/genesys-opium-users-list", count: "1.1K+" },
      { name: "Constant Contact Users", link: "/constant-contact-users-list", count: "1.0K+" },
      { name: "FrontRange GoldMine Users", link: "/frontrange-goldmine-users-list", count: "1.0K+" },
      { name: "SAP Customer Relationship Users", link: "/sap-customer-relationship-users-list", count: "1.0K+" },
      { name: "Genesys Users", link: "/genesys-users-list", count: "835+" }
    ]
  },
  {
    title: "Network & Hardware Infrastructure",
    description: "Network hardware and infrastructure equipment",
    items: [
      { name: "NetApp Users", link: "/netapp-users-list", count: "9.7K+" },
      { name: "Cisco Hardware Users", link: "/cisco-hardware-users-list", count: "4.3K+" },
      { name: "Juniper Users", link: "/juniper-users-list", count: "3.4K+" },
      { name: "Cisco Routers Users", link: "/cisco-routers-users-list", count: "3.1K+" },
      { name: "Cisco Catalyst Switch Users", link: "/cisco-catalyst-switch-users-list", count: "2.7K+" },
      { name: "Riverbed Users", link: "/riverbed-users-list", count: "2.1K+" },
      { name: "PolyCom Users", link: "/polycom-users-list", count: "2.0K+" },
      { name: "Cisco Adaptive Security Users", link: "/cisco-adaptive-security-users-list", count: "1.9K+" },
      { name: "Cisco Firewalls Users", link: "/cisco-firewalls-users-list", count: "1.7K+" },
      { name: "Cisco VoIP Users", link: "/cisco-voip-users-list", count: "1.6K+" },
      { name: "Brocade Users", link: "/brocade-users-list", count: "1.4K+" },
      { name: "EMC SAN Storage Users", link: "/emc-san-storage-users-list", count: "1.2K+" }
    ]
  },
  {
    title: "Database Management Systems",
    description: "Database systems, data storage, and management platforms",
    items: [
      { name: "Microsoft SQL Server Users", link: "/microsoft-sql-server-users-list", count: "267K+" },
      { name: "MySQL Users", link: "/mysql-users-list", count: "234K+" },
      { name: "Oracle Corporation Users", link: "/oracle-users-list", count: "2.84M" },
      { name: "MongoDB Users", link: "/mongodb-users-list", count: "145K+" },
      { name: "PostgreSQL Users", link: "/postgresql-users-list", count: "123K+" },
      { name: "Redis Users", link: "/redis-users-list", count: "89K+" },
      { name: "Elasticsearch Users", link: "/elasticsearch-users-list", count: "78K+" },
      { name: "Cassandra Users", link: "/cassandra-users-list", count: "67K+" },
      { name: "IBM DB2 Users", link: "/ibm-db2-users-list", count: "54K+" },
      { name: "SAP HANA Users", link: "/sap-hana-users-list", count: "43K+" },
      { name: "Teradata Users", link: "/teradata-users-list", count: "38K+" },
      { name: "Neo4j Users", link: "/neo4j-users-list", count: "32K+" }
    ]
  },
  {
    title: "Accounting Software",
    description: "Financial management and accounting solutions",
    items: [
      { name: "QuickBooks Users", link: "/quickbooks-users-list", count: "487K+" },
      { name: "NetSuite Users", link: "/netsuite-users-list", count: "268K+" },
      { name: "Sage Intacct Users", link: "/sage-intacct-users-list", count: "156K+" },
      { name: "Xero Users", link: "/xero-users-list", count: "134K+" },
      { name: "SAP Ariba Users", link: "/sap-ariba-users-list", count: "98K+" },
      { name: "Oracle Financials Users", link: "/oracle-financials-users-list", count: "87K+" },
      { name: "Microsoft Dynamics 365 Finance Users", link: "/dynamics-365-finance-users-list", count: "76K+" },
      { name: "Workday Financial Management Users", link: "/workday-financial-users-list", count: "65K+" },
      { name: "BlackLine Users", link: "/blackline-users-list", count: "54K+" },
      { name: "FreshBooks Users", link: "/freshbooks-users-list", count: "43K+" },
      { name: "Zoho Books Users", link: "/zoho-books-users-list", count: "38K+" },
      { name: "Wave Accounting Users", link: "/wave-accounting-users-list", count: "32K+" }
    ]
  },
  {
    title: "High Performance Computing",
    description: "HPC, supercomputing, and advanced processing systems",
    items: [
      { name: "Intel Xeon Users", link: "/intel-xeon-users-list", count: "345K+" },
      { name: "Apache Hadoop Users", link: "/apache-hadoop-users-list", count: "156K+" },
      { name: "NVIDIA Tesla Users", link: "/nvidia-tesla-users-list", count: "89K+" },
      { name: "Apache Spark Users", link: "/apache-spark-users-list", count: "76K+" },
      { name: "Google Cloud Platform Users", link: "/google-cloud-platform-users-list", count: "67K+" },
      { name: "AWS Batch Users", link: "/aws-batch-users-list", count: "54K+" },
      { name: "Microsoft Azure HPC Users", link: "/azure-hpc-users-list", count: "43K+" },
      { name: "IBM Spectrum Computing Users", link: "/ibm-spectrum-computing-users-list", count: "38K+" },
      { name: "Dell EMC Users", link: "/dell-emc-users-list", count: "32K+" },
      { name: "HPE Storage Systems Users", link: "/hpe-storage-systems-users-list", count: "28K+" },
      { name: "NVIDIA DGX Users", link: "/nvidia-dgx-users-list", count: "23K+" },
      { name: "Supermicro Users", link: "/supermicro-users-list", count: "19K+" }
    ]
  },
  {
    title: "Cloud Computing",
    description: "Cloud platforms and infrastructure services",
    items: [
      { name: "Amazon Users", link: "/amazon-users-list", count: "32.5K+" },
      { name: "SoftLayer Users", link: "/softlayer-users-list", count: "30.8K+" },
      { name: "Rackspace Users", link: "/rackspace-users-list", count: "25.2K+" },
      { name: "Amazon Web Services Users", link: "/aws-users-list", count: "16.9K+" },
      { name: "Akamai Users", link: "/akamai-users-list", count: "4.4K+" },
      { name: "Amazon CloudFront Users", link: "/amazon-cloudfront-users-list", count: "3.6K+" },
      { name: "Linode Users", link: "/linode-users-list", count: "3.4K+" },
      { name: "SalesForce Sales Cloud Users", link: "/salesforce-sales-cloud-users-list", count: "3.4K+" },
      { name: "Google Cloud Apps Users", link: "/google-cloud-apps-users-list", count: "3.0K+" },
      { name: "VMware vSphere Users", link: "/vmware-vsphere-users-list", count: "2.2K+" },
      { name: "The Planet Users", link: "/the-planet-users-list", count: "2.1K+" },
      { name: "SingleHop Users", link: "/singlehop-users-list", count: "1.9K+" }
    ]
  },
  {
    title: "HR Software",
    description: "Human resources and workforce management systems",
    items: [
      { name: "ADP Users", link: "/adp-users-list", count: "2.9K+" },
      { name: "Oracle PeopleSoft Users", link: "/oracle-peoplesoft-users-list", count: "2.5K+" },
      { name: "Kronos Users", link: "/kronos-users-list", count: "2.1K+" },
      { name: "SAP SuccessFactors Users", link: "/sap-successfactors-users-list", count: "1.9K+" },
      { name: "SAP Human Capital Management Users", link: "/sap-hcm-users-list", count: "1.6K+" },
      { name: "Exact Users", link: "/exact-users-list", count: "919+" },
      { name: "Ceridian Users", link: "/ceridian-users-list", count: "872+" },
      { name: "Ultimate Software Users", link: "/ultimate-software-users-list", count: "863+" },
      { name: "Essential Learning LCMS Users", link: "/essential-learning-lcms-users-list", count: "822+" },
      { name: "Sage HR Users", link: "/sage-hr-users-list", count: "806+" },
      { name: "Oracle Taleo Users", link: "/oracle-taleo-users-list", count: "803+" },
      { name: "ABS Users", link: "/abs-users-list", count: "789+" }
    ]
  },
  {
    title: "Programming Languages",
    description: "Programming languages and development platforms",
    items: [
      { name: "Microsoft ASP.NET Users", link: "/microsoft-aspnet-users-list", count: "11.6K+" },
      { name: "PHP Users", link: "/php-users-list", count: "10.5K+" },
      { name: "JQuery Users", link: "/jquery-users-list", count: "9.6K+" },
      { name: "Oracle Java Users", link: "/oracle-java-users-list", count: "8.4K+" },
      { name: "Microsoft .NET Users", link: "/microsoft-dotnet-users-list", count: "6.8K+" },
      { name: "Perl Users", link: "/perl-users-list", count: "4.8K+" },
      { name: "HTML Users", link: "/html-users-list", count: "3.8K+" },
      { name: "Adobe JavaScript Users", link: "/adobe-javascript-users-list", count: "3.7K+" },
      { name: "Adobe ActionScript Users", link: "/adobe-actionscript-users-list", count: "3.3K+" },
      { name: "Ruby on Rails Users", link: "/ruby-on-rails-users-list", count: "3.4K+" },
      { name: "Microsoft Transact-SQL Users", link: "/microsoft-transact-sql-users-list", count: "3.0K+" },
      { name: "Oracle Java J2EE Users", link: "/oracle-java-j2ee-users-list", count: "2.5K+" }
    ]
  },
  {
    title: "Operating Systems",
    description: "Operating systems and platform software",
    items: [
      { name: "Linux Users", link: "/linux-users-list", count: "13.7K+" },
      { name: "Unix Users", link: "/unix-users-list", count: "10.5K+" },
      { name: "Microsoft Windows Users", link: "/microsoft-windows-users-list", count: "9.2K+" },
      { name: "Red Hat Users", link: "/red-hat-users-list", count: "3.9K+" },
      { name: "Apple Mac OS Users", link: "/apple-mac-os-users-list", count: "2.8K+" },
      { name: "Microsoft Windows Users", link: "/microsoft-windows-server-users-list", count: "2.6K+" },
      { name: "Oracle Sun Solaris Users", link: "/oracle-sun-solaris-users-list", count: "1.8K+" },
      { name: "IBM z/OS Users", link: "/ibm-zos-users-list", count: "1.5K+" },
      { name: "Apple Mac Users", link: "/apple-mac-users-list", count: "1.5K+" },
      { name: "IBM AIX Users", link: "/ibm-aix-users-list", count: "1.4K+" },
      { name: "CentOS Users", link: "/centos-users-list", count: "1.2K+" },
      { name: "Microsoft Windows Users", link: "/microsoft-windows-vista-users-list", count: "1.1K+" }
    ]
  },
  {
    title: "Business Intelligence & Analytics",
    description: "Business intelligence, analytics, and data visualization platforms",
    items: [
      { name: "Microsoft Power BI Users", link: "/power-bi-users-list", count: "248K+" },
      { name: "Tableau Users", link: "/tableau-users-list", count: "156K+" },
      { name: "SAP Analytics Cloud Users", link: "/sap-analytics-cloud-users-list", count: "89K+" },
      { name: "SAP BusinessObjects Users", link: "/sap-businessobjects-users-list", count: "75K+" },
      { name: "Qlik Sense Users", link: "/qlik-sense-users-list", count: "67K+" },
      { name: "Google Analytics 360 Users", link: "/google-analytics-360-users-list", count: "54K+" },
      { name: "Amazon QuickSight Users", link: "/amazon-quicksight-users-list", count: "43K+" },
      { name: "IBM Cognos Analytics Users", link: "/ibm-cognos-analytics-users-list", count: "38K+" },
      { name: "MicroStrategy Users", link: "/microstrategy-users-list", count: "34K+" },
      { name: "Looker Users", link: "/looker-users-list", count: "29K+" },
      { name: "SAS Business Intelligence Users", link: "/sas-business-intelligence-users-list", count: "27K+" },
      { name: "Oracle Analytics Cloud Users", link: "/oracle-analytics-cloud-users-list", count: "23K+" },
      { name: "Piwik Users", link: "/piwik-users-list", count: "1.4K+" },
      { name: "WebTrends Users", link: "/webtrends-users-list", count: "1.3K+" },
      { name: "Moz Users", link: "/moz-users-list", count: "1.2K+" }
    ]
  },
  {
    title: "IT Management",
    description: "IT service management and infrastructure monitoring",
    items: [
      { name: "ManageEngine Users", link: "/manageengine-users-list", count: "5.8K+" },
      { name: "SolarWinds Users", link: "/solarwinds-users-list", count: "3.7K+" },
      { name: "BMC Numara Unified Users", link: "/bmc-numara-unified-users-list", count: "2.1K+" },
      { name: "SolarWinds Web Help Desk Users", link: "/solarwinds-web-help-desk-users-list", count: "2.1K+" },
      { name: "BMC Remedy Users", link: "/bmc-remedy-users-list", count: "1.7K+" },
      { name: "FrontRange Users", link: "/frontrange-users-list", count: "1.5K+" },
      { name: "SAP NetWeaver Users", link: "/sap-netweaver-users-list", count: "1.5K+" },
      { name: "ManageEngine ADAP Users", link: "/manageengine-adap-users-list", count: "1.2K+" },
      { name: "ManageEngine Desktop Users", link: "/manageengine-desktop-users-list", count: "908+" },
      { name: "FotoWare Users", link: "/fotoware-users-list", count: "889+" },
      { name: "ServiceNow Users", link: "/servicenow-users-list", count: "867+" },
      { name: "WoodWing Users", link: "/woodwing-users-list", count: "765+" }
    ]
  },
  {
    title: "Server Software",
    description: "Server applications and middleware platforms",
    items: [
      { name: "Apache Users", link: "/apache-users-list", count: "16.5K+" },
      { name: "Apache Tomcat Users", link: "/apache-tomcat-users-list", count: "1.8K+" },
      { name: "Oracle Web Logic Users", link: "/oracle-web-logic-users-list", count: "1.1K+" },
      { name: "Microsoft System Center Configuration Users", link: "/microsoft-system-center-configuration-users-list", count: "1.1K+" },
      { name: "IBM WebSphere MQ Users", link: "/ibm-websphere-mq-users-list", count: "834+" },
      { name: "Apache 2.X Users", link: "/apache-2x-users-list", count: "800+" },
      { name: "IBM WebSphere Application Server Users", link: "/ibm-websphere-application-server-users-list", count: "729+" },
      { name: "Microsoft BizTalk Server Users", link: "/microsoft-biztalk-server-users-list", count: "679+" },
      { name: "IBM WebSphere Portal Users", link: "/ibm-websphere-portal-users-list", count: "570+" },
      { name: "Microsoft BizTalk Users", link: "/microsoft-biztalk-users-list", count: "559+" },
      { name: "Apache Lucene Users", link: "/apache-lucene-users-list", count: "462+" },
      { name: "Microsoft System Center Operations Users", link: "/microsoft-system-center-operations-users-list", count: "453+" }
    ]
  },
  {
    title: "E-Commerce",
    description: "E-commerce platforms and online retail solutions",
    items: [
      { name: "Magento Users", link: "/magento-users-list", count: "22.7K+" },
      { name: "WooCommerce Users", link: "/woocommerce-users-list", count: "6.9K+" },
      { name: "osCommerce Users", link: "/oscommerce-users-list", count: "5.4K+" },
      { name: "Zen Cart Users", link: "/zen-cart-users-list", count: "1.7K+" },
      { name: "Shopify Users", link: "/shopify-users-list", count: "1.3K+" },
      { name: "BigCommerce Users", link: "/bigcommerce-users-list", count: "1.2K+" },
      { name: "IBM WebSphere Commerce Users", link: "/ibm-websphere-commerce-users-list", count: "774+" },
      { name: "MonsterCommerce Users", link: "/monstercommerce-users-list", count: "771+" },
      { name: "Ubercart Users", link: "/ubercart-users-list", count: "751+" },
      { name: "Shopatron Users", link: "/shopatron-users-list", count: "519+" },
      { name: "PrestaShop Users", link: "/prestashop-users-list", count: "491+" },
      { name: "Oracle Endeca Users", link: "/oracle-endeca-users-list", count: "448+" }
    ]
  },
  {
    title: "Server Hardware",
    description: "Server hardware and infrastructure equipment",
    items: [
      { name: "IBM AS/400 Users", link: "/ibm-as400-users-list", count: "3.9K+" },
      { name: "IBM iSeries AS/400 Users", link: "/ibm-iseries-as400-users-list", count: "2.5K+" },
      { name: "Cisco Unified Communications Users", link: "/cisco-unified-communications-users-list", count: "985+" },
      { name: "OpenText FirstClass Users", link: "/opentext-firstclass-users-list", count: "820+" },
      { name: "IBM System i Users", link: "/ibm-system-i-users-list", count: "687+" },
      { name: "HP ProLiant Server Users", link: "/hp-proliant-server-users-list", count: "489+" },
      { name: "VMware Server Users", link: "/vmware-server-users-list", count: "439+" },
      { name: "Dell PowerEdge Server Users", link: "/dell-poweredge-server-users-list", count: "411+" },
      { name: "HP Server Users", link: "/hp-server-users-list", count: "359+" },
      { name: "NEC Users", link: "/nec-users-list", count: "365+" },
      { name: "HP Blade Server Users", link: "/hp-blade-server-users-list", count: "350+" },
      { name: "SQL Software Users", link: "/sql-software-users-list", count: "335+" }
    ]
  },
  {
    title: "IT Security",
    description: "Cybersecurity and information security solutions",
    items: [
      { name: "McAfee Users", link: "/mcafee-users-list", count: "10.6K+" },
      { name: "CommVault Users", link: "/commvault-users-list", count: "1.3K+" },
      { name: "McAfee ePO Users", link: "/mcafee-epo-users-list", count: "1.2K+" },
      { name: "McAfee Mail Security Users", link: "/mcafee-mail-security-users-list", count: "909+" },
      { name: "EMC RSA Security Users", link: "/emc-rsa-security-users-list", count: "888+" },
      { name: "GFI Software Users", link: "/gfi-software-users-list", count: "481+" },
      { name: "McAfee Security Users", link: "/mcafee-security-users-list", count: "377+" },
      { name: "EMC RSA Envisio Users", link: "/emc-rsa-envisio-users-list", count: "336+" },
      { name: "CommVault Simpana Users", link: "/commvault-simpana-users-list", count: "234+" },
      { name: "McAfee Virus Scan Users", link: "/mcafee-virus-scan-users-list", count: "218+" },
      { name: "McAfee Email Users", link: "/mcafee-email-users-list", count: "214+" },
      { name: "McAfee Data Loss Users", link: "/mcafee-data-loss-users-list", count: "179+" }
    ]
  },
  {
    title: "Hosting",
    description: "Web hosting and domain management services",
    items: [
      { name: "GoDaddy Users", link: "/godaddy-users-list", count: "23.9K+" },
      { name: "1&1 Internet Users", link: "/1and1-internet-users-list", count: "7.9K+" },
      { name: "Media Temple Users", link: "/media-temple-users-list", count: "7.2K+" },
      { name: "Peer1 Users", link: "/peer1-users-list", count: "5.2K+" },
      { name: "Bluehost Users", link: "/bluehost-users-list", count: "5.2K+" },
      { name: "Fast Hosts Users", link: "/fast-hosts-users-list", count: "2.8K+" },
      { name: "UKFastnet Users", link: "/ukfastnet-users-list", count: "2.3K+" },
      { name: "LiquidWeb Users", link: "/liquidweb-users-list", count: "2.1K+" },
      { name: "Webfusion Users", link: "/webfusion-users-list", count: "1.9K+" },
      { name: "HostGator Users", link: "/hostgator-users-list", count: "1.2K+" },
      { name: "Lunar Pages Users", link: "/lunar-pages-users-list", count: "1.1K+" },
      { name: "FireHost Users", link: "/firehost-users-list", count: "1.0K+" }
    ]
  },
  {
    title: "Network Software",
    description: "Network management and monitoring software",
    items: [
      { name: "HP OpenView Users", link: "/hp-openview-users-list", count: "979+" },
      { name: "Dell SonicWall Users", link: "/dell-sonicwall-users-list", count: "548+" },
      { name: "HP OpenView Users", link: "/hp-openview-network-users-list", count: "395+" },
      { name: "CA Spectrum Users", link: "/ca-spectrum-users-list", count: "346+" },
      { name: "CA Unicenter Users", link: "/ca-unicenter-users-list", count: "298+" },
      { name: "HP Network Node Manager Users", link: "/hp-network-node-manager-users-list", count: "207+" },
      { name: "Arbor Networks Users", link: "/arbor-networks-users-list", count: "169+" },
      { name: "BMC BladeLogic Users", link: "/bmc-bladelogic-users-list", count: "168+" },
      { name: "HP Business Availability Users", link: "/hp-business-availability-users-list", count: "116+" },
      { name: "Arbor Peakflow Users", link: "/arbor-peakflow-users-list", count: "99+" },
      { name: "BMC Marimba Users", link: "/bmc-marimba-users-list", count: "81+" },
      { name: "Dell SonicWall Firewall Users", link: "/dell-sonicwall-firewall-users-list", count: "76+" }
    ]
  },
  {
    title: "WebServer",
    description: "Web server software and technologies",
    items: [
      { name: "Microsoft IIS Users", link: "/microsoft-iis-users-list", count: "3.1K+" },
      { name: "Nginx Users", link: "/nginx-users-list", count: "2.7K+" },
      { name: "HTTP Users", link: "/http-users-list", count: "1.8K+" },
      { name: "Microsoft IIS 7 Users", link: "/microsoft-iis-7-users-list", count: "716+" },
      { name: "Microsoft IIS 6 Users", link: "/microsoft-iis-6-users-list", count: "662+" },
      { name: "HTTP 1.1 Users", link: "/http-11-users-list", count: "596+" },
      { name: "Jetty Users", link: "/jetty-users-list", count: "419+" },
      { name: "Microsoft IIS 8 Users", link: "/microsoft-iis-8-users-list", count: "329+" },
      { name: "Microsoft IIS Users", link: "/microsoft-iis-server-users-list", count: "298+" },
      { name: "HTTP 1 Users", link: "/http-1-users-list", count: "195+" },
      { name: "Oracle Sun One Users", link: "/oracle-sun-one-users-list", count: "87+" },
      { name: "Squid Users", link: "/squid-users-list", count: "87+" }
    ]
  },
  {
    title: "Other Technology",
    description: "Various other technology platforms and solutions",
    items: [
      { name: "Microsoft Users", link: "/microsoft-users-list", count: "209.4K+" },
      { name: "Google Users", link: "/google-users-list", count: "37.2K+" },
      { name: "IBM Users", link: "/ibm-users-list", count: "81.9K+" },
      { name: "Adobe Users", link: "/adobe-users-list", count: "54.3K+" },
      { name: "Google Analytics Users", link: "/google-analytics-users-list", count: "42.8K+" },
      { name: "Get Satisfaction Users", link: "/get-satisfaction-users-list", count: "24.3K+" },
      { name: "VMware Users", link: "/vmware-users-list", count: "24.7K+" },
      { name: "Google DoubleClick Users", link: "/google-doubleclick-users-list", count: "18.7K+" },
      { name: "Typekit Users", link: "/typekit-users-list", count: "17.0K+" },
      { name: "Microsoft Excel Users", link: "/microsoft-excel-users-list", count: "16.2K+" },
      { name: "Microsoft Office Users", link: "/microsoft-office-users-list", count: "16.1K+" },
      { name: "Microsoft Outlook Users", link: "/microsoft-outlook-users-list", count: "15.3K+" }
    ]
  }
];

export default function TechnologyListsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Technology User Lists - 1000+ Software Applications | ELP Data</title>
        <meta name="description" content="Access verified user lists for 1000+ technology applications including ERP, CRM, databases, and enterprise software. Get targeted technology user data with contact information." />
        <meta name="keywords" content="technology user lists, software user database, enterprise application users, ERP users, CRM users, database technology lists" />
        <meta property="og:title" content="Technology User Lists - 1000+ Software Applications | ELP Data" />
        <meta property="og:description" content="Access verified user lists for 1000+ technology applications including ERP, CRM, databases, and enterprise software." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.elpdata.com/technology-lists" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">All Technology Lists</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Complete directory of technology user lists and databases. Access verified contact information 
              for decision-makers using specific enterprise technologies across all industries.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/80">Technology Categories</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">12M+</div>
                  <div className="text-sm text-white/80">Verified Contacts</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">195+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Technology User Lists by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse comprehensive technology user databases organized by industry categories. Access decision-maker contact information across enterprise software, cloud platforms, and specialized technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyCategories.map((category, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-900 text-xl font-bold">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.slice(0, 6).map((item, itemIndex) => (
                      <Link 
                        key={itemIndex} 
                        href={item.link}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors group border border-gray-100"
                      >
                        <span className="text-gray-700 group-hover:text-blue-600 font-medium text-sm">
                          {item.name}
                        </span>
                        <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
                          {item.count}
                        </Badge>
                      </Link>
                    ))}
                    {category.items.length > 6 && (
                      <div className="pt-2 text-center">
                        <span className="text-sm text-gray-500">
                          +100 more technologies
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Custom Technology Lists?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get targeted lists based on specific technology combinations, company size, 
            industry verticals, and geographic regions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/data-services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Request Custom List
            </Link>
            <Link 
              href="/marketing-solutions"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}