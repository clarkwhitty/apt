var catalog = [
{"title":"Abstract Test Cases","link":"#","category":"automation","excerpt":"These test cases show how abstract system tests are built, automating either Cisco or Juniper device with STC and verifying frame contents with Wireshark","class":"Community"},
{"title":"ILO REST","link":"#","category":"framework","excerpt":"QuickCalls useful for automating ILO via its REST API","class":"Community"},
{"title":"CloudShell","link":"#","category":"framework","excerpt":"QuickCalls for automating Quali CloudShell","class":"Community"},
{"title":"Velocity REST","link":"#","category":"framework","excerpt":"QuickCalls useful for automating Velocity via its REST API","class":"Community"},
{"title":"Velocity Utilities","link":"#","category":"framework","excerpt":"QuickCalls useful for iTest and Velocity interraction","class":"Community"},
{"title":"Android","link":"#","category":"library","excerpt":"Library of QuickCalls and response maps for automating Android mobile phones via the Android Debug Bridge, ADB","class":"Community"},
{"title":"Adtran","link":"#","category":"library","excerpt":"Large library of QuickCalls and response maps tested with TA5000 and NV838 for metro ethernet and cfm testing","class":"Community"},
{"title":"Adtran CPE","link":"#","category":"library","excerpt":"Response maps and QuickCalls for Adtran CPE devices with emphasis on voice testing scenarios","class":"Community"},
{"title":"ALU 7450","link":"#","category":"library","excerpt":"QuickCalls and response maps used to test ALU 7450 functions","class":"Community"},
{"title":"Arris","link":"#","category":"library","excerpt":"A variety of QuickCalls and response maps tested with Arris NM55 for ADSL and VDSL test applications","class":"Community"},
{"title":"Ciena LEOS","link":"#","category":"library","excerpt":"Several QuickCalls and response maps useful for automating Ciena metro ethernet systems running LEOS","class":"Community"},
{"title":"Ciena SAOS","link":"#","category":"library","excerpt":"Several QuickCalls and response maps useful for automating Ciena metro ethernet systems running SAOS","class":"Community"},
{"title":"Cisco ASR 5000","link":"#","category":"library","excerpt":"Collection of response maps and QuickCalls applicable to Cisco ASR device testing","class":"Community"},
{"title":"Cisco CPE","link":"#","category":"library","excerpt":"Automation library for Cisco CPE devices with emphasis on voice testing","class":"Community"},
{"title":"Cisco IOS 2","link":"#","category":"library","excerpt":"Collection of QuickCalls and response maps for Cisco IOS devices","class":"Community"},
{"title":"Cisco NX OS","link":"#","category":"library","excerpt":"Large library of QuickCalls and response maps for Cisco Nexus devices running NXOS","class":"Community"},
{"title":"Cisco CMTS","link":"#","category":"library","excerpt":"QuickCalls and response map libaries for Cisco cable modem termination systems  ","class":"Community"},
{"title":"Adtran DSLAM","link":"#","category":"library","excerpt":"Large variety of QuickCalls and response maps useful for building system tests automating the Adtran DSLAM","class":"Community"},
{"title":"Nokia Access","link":"#","category":"library","excerpt":"Large library of QuickCalls and response maps for a variety of Nokia DSL and access systems (7330, 7302, 7450)","class":"Community"},
{"title":"Calix DSLAM","link":"#","category":"library","excerpt":"QuickCalls and response maps useful for building system tests automating the Calix DSLAM","class":"Community"},
{"title":"Huawei DSLAM","link":"#","category":"library","excerpt":"QuickCalls and response maps useful for building system tests automating the Huawei DSLAM","class":"Community"},
{"title":"Lucent Stinger DSLAM","link":"#","category":"library","excerpt":"QuickCalls and response maps useful for building system tests automating the Lucent Stinger DSLAM","class":"Community"},
{"title":"NewBridge DSLAM","link":"#","category":"library","excerpt":"QuickCalls and response maps useful for building system tests automating the NewBridge DSLAM","class":"Community"},
{"title":"NSN DSLAM","link":"#","category":"library","excerpt":"QuickCalls and response maps useful for building system tests automating the NSN DSLAM","class":"Community"},
{"title":"UMC DSLAM","link":"#","category":"library","excerpt":"QuickCalls and response maps useful for building system tests automating the UMC DSLAM","class":"Community"},
{"title":"OICS Router","link":"#","category":"library","excerpt":"SSH and Telnet QuickCalls and response maps for the OICS Router","class":"Community"},
{"title":"Juniper Router","link":"#","category":"library","excerpt":"SSH and Telnet QuickCalls and response maps for the Juniper Router","class":"Community"},
{"title":"Cisco Mobility Management Entity (MME)","link":"#","category":"library","excerpt":"SSH QuickCalls and response maps","class":"Community"},
{"title":"Cisco Serving GPRS Support Node (SGSN)","link":"#","category":"library","excerpt":"SSH QuickCalls and response maps","class":"Community"},
{"title":"Cisco Serving Gateway/PDN Gateway (SPGW)","link":"#","category":"library","excerpt":"SSH QuickCalls and response maps","class":"Community"},
{"title":"VMware vSphere","link":"#","category":"library","excerpt":"Client QuickCalls and response maps","class":"Community"},
{"title":"Cisco IOS 1","link":"#","category":"library","excerpt":"Collection of QuickCalls and response maps for Cisco IOS devices","class":"Reference"},
{"title":"Cisco IOS XR 1","link":"#","category":"library","excerpt":"Large assortment of response maps and QuickCalls for Cisco IOS XR devices","class":"Reference"},
{"title":"Nokia 7750","link":"#","category":"library","excerpt":"QuickCalls and response maps for basic configuration.","class":"Reference"},
{"title":"Alcatel-Lucent (TiMOS) Service Router","link":"#","category":"library","excerpt":"QuickCalls and response map examples","class":"Reference"},
{"title":"Cisco IOS XR 2","link":"#","category":"library","excerpt":"Collection of QuickCalls and response maps for Cisco IOS XR devices","class":"Tested by Spirent"},
{"title":"Spirent Attero powered by Calnex","link":"#","category":"library","excerpt":"QuickCall library for network impairment emulation - delay, frame loss, reordering, capturing, link flapping, and more","class":"Community"},
{"title":"Cyberflood 2","link":"#","category":"library","excerpt":"QuickCall library useful for building test cases automating Spirent Cyberflood","class":"Community"},
{"title":"ERCOM","link":"#","category":"library","excerpt":"QuickCalls and response maps ","class":"Community"},
{"title":"JDSU","link":"#","category":"library","excerpt":"QuickCalls and response maps ","class":"Community"},
{"title":"Landslide REST","link":"#","category":"library","excerpt":"QuickCall library useful for building test cases automating Spirent Landslide via REST","class":"Community"},
{"title":"Spirent TestCenter REST and Database","link":"#","category":"library","excerpt":"QuickCall examples for traffic, capture, 802.11 wifi, and SQLite on STC ","class":"Community"},
{"title":"Spirent TestCenter RFC 2544","link":"#","category":"library","excerpt":"Provides RFC 2544 quickcalls for the Spirent TestCenter session type and response maps for result and statistics views. ","class":"Community"},
{"title":"Abacus","link":"#","category":"library","excerpt":"Response maps and QuickCalls for Abacus VOIP and PSTN test automation","class":"Tested by Spirent"},
{"title":"Iperf Server - Linux","link":"#","category":"library","excerpt":"QuickCalls and response map examples","class":"Tested by Spirent"},
{"title":"Iperf Server - Windows","link":"#","category":"library","excerpt":"QuickCalls and response map examples","class":"Tested by Spirent"},
{"title":"Ixia IxNetwork Basics","link":"#","category":"library","excerpt":"Provides basic traffic quickcalls for the Ixia IxNetwork session type.","class":"Tested by Spirent"},
{"title":"Spirent TestCenter Basics","link":"#","category":"library","excerpt":"Provides basic traffic quickcalls for the Spirent TestCenter session type and response maps for result and statistics views. Tested with STC FW version 4.75. ","class":"Tested by Spirent"},
{"title":"Wireshark","link":"#","category":"library","excerpt":"QuickCall examples","class":"Community"},
{"title":"Command Session","link":"#","category":"library","excerpt":"QuickCalls and response map examples showing various response formats and analysis rules.","class":"Community"},
{"title":"Documentation Generator","link":"#","category":"library","excerpt":"Generate project documentation, for Git repository, from QuickCall and Procedure libraries. ","class":"Community"},
{"title":"POP3 and SMTP Email","link":"#","category":"library","excerpt":"QuickCalls examples","class":"Community"},
{"title":"Flex License Manager Tools","link":"#","category":"library","excerpt":"These shell and Tcl scipts are used to manage the APT License Server (FlexLM).","class":"Community"},
{"title":"Cytec Control Module","link":"#","category":"library","excerpt":"LAN Telnet QuickCalls for IF-9 or IF-11 models","class":"Community"},
{"title":"MRV Media Cross Connect","link":"#","category":"library","excerpt":"Telnet QuickCall examples","class":"Community"},
{"title":"WTI Power Controller","link":"#","category":"library","excerpt":"Telnet QuickCalls and response maps","class":"Community"},
{"title":"WiFi Tools - Remote Windows Host","link":"#","category":"library","excerpt":"SSH QuickCalls and response map examples using netsh","class":"Community"}
]