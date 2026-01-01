loadNIST800172Framework({
    name: "NIST SP 800-172",
    description: "Based on NIST SP 800-172",
    questions: [
        {
            "id": "3.1.1e",
            "order": 1,
            "family": "Access Control",
            "title": "Dual Authorization",
            "assessment_question": "Does the organization enforce dual authorization (two-person control) for defined privileged commands or other sensitive actions?",
            "gap_description": "Without dual authorization, a single compromised account or malicious insider can execute critical actions unilaterally, increasing the risk of unauthorized system changes or data compromise."
        },
        {
            "id": "3.1.2e",
            "order": 2,
            "family": "Access Control",
            "title": "Non-Organizationally Owned Systems - Restricted Use",
            "assessment_question": "Are there defined and enforced restrictions for the use of non-organizationally owned systems (including personal devices like BYOD) to process, store, or transmit CUI?",
            "gap_description": "Allowing unrestricted use of non-organizationally owned systems introduces untrusted and potentially insecure devices into the environment, significantly increasing the risk of CUI exposure and malware infection."
        },
        {
            "id": "3.1.4e",
            "order": 3,
            "family": "Access Control",
            "title": "Concurrent Session Control",
            "assessment_question": "Is the number of concurrent sessions limited for user accounts, particularly for privileged or sensitive account types?",
            "gap_description": "Unlimited concurrent sessions can mask malicious activity, as an attacker can use a compromised account simultaneously with the legitimate user, making it difficult to detect an ongoing breach."
        },
        {
            "id": "3.1.5e",
            "order": 4,
            "family": "Access Control",
            "title": "Remote Access Monitoring and Control",
            "assessment_question": "Does the organization use automated mechanisms to actively monitor and control all remote access methods?",
            "gap_description": "Failure to automate the monitoring and control of remote access creates a blind spot for detecting attacks and ensuring compliance with security policies for remote connections."
        },
        {
            "id": "3.1.6e",
            "order": 5,
            "family": "Access Control",
            "title": "Protection of Remote Access Mechanism Information",
            "assessment_question": "Is information about remote access mechanisms (e.g., connection details, credentials) protected from unauthorized use and disclosure?",
            "gap_description": "Exposure of remote access mechanism details provides attackers with the information they need to bypass perimeter defenses and gain unauthorized entry into the network."
        },
        {
            "id": "3.1.7e",
            "order": 6,
            "family": "Access Control",
            "title": "Automated Audit Actions for Account Management",
            "assessment_question": "Are automated mechanisms used to audit all account management actions, including creation, modification, enabling, disabling, and removal?",
            "gap_description": "Manual auditing of account management is prone to errors and delays, potentially allowing unauthorized accounts or privilege changes to go unnoticed."
        },
        {
            "id": "3.1.8e",
            "order": 7,
            "family": "Access Control",
            "title": "Account Monitoring for Atypical Usage",
            "assessment_question": "Are system accounts monitored for atypical usage (e.g., unusual login times, locations), with anomalies reported to security personnel?",
            "gap_description": "Without monitoring for atypical usage, organizations may miss early indicators of a compromised account or insider threat activity, allowing an attack to progress undetected."
        },
        {
            "id": "3.1.9e",
            "order": 8,
            "family": "Access Control",
            "title": "Attribute-Based Access Control",
            "assessment_question": "Does the organization enforce an attribute-based access control (ABAC) policy to manage access to defined subjects and objects?",
            "gap_description": "Relying solely on traditional access control models can be inflexible and lead to privilege creep. A lack of ABAC prevents fine-grained control based on dynamic user, resource, and environmental attributes."
        },
        {
            "id": "3.1.10e",
            "order": 9,
            "family": "Access Control",
            "title": "Object Security Attributes",
            "assessment_question": "Are security attributes associated with information, source, and destination objects used to enforce information flow control policies?",
            "gap_description": "Without enforcing flow control based on object security attributes, there is a higher risk of CUI leaking between systems or security domains in violation of policy."
        },
        {
            "id": "3.1.11e",
            "order": 10,
            "family": "Access Control",
            "title": "Role-Based Access Control",
            "assessment_question": "Is a role-based access control (RBAC) policy enforced, where access is based on defined roles and the users authorized to assume them?",
            "gap_description": "Managing permissions on a per-user basis is inefficient and error-prone. A lack of RBAC complicates privilege administration and increases the likelihood of users accumulating excessive permissions."
        },
        {
            "id": "3.1.12e",
            "order": 11,
            "family": "Access Control",
            "title": "Physical or Logical Separation of CUI Flows",
            "assessment_question": "Are information flows containing CUI separated either physically or logically using defined mechanisms (e.g., separate networks, VLANs, encryption)?",
            "gap_description": "Commingling CUI traffic with other data flows increases the risk of unauthorized access and makes it more difficult to apply targeted security controls and monitoring."
        },
        {
            "id": "3.1.13e",
            "order": 12,
            "family": "Access Control",
            "title": "Metadata",
            "assessment_question": "Is information flow control enforced based on defined metadata associated with the data?",
            "gap_description": "Failure to use metadata for flow control decisions limits the ability to implement effective and automated policies, increasing the risk of data spillage."
        },
        {
            "id": "3.1.14e",
            "order": 13,
            "family": "Access Control",
            "title": "Security Policy Filters",
            "assessment_question": "Are security policy filters used to enforce information flow control, with a clear policy for handling data that fails filter processing?",
            "gap_description": "Without security policy filters, malicious or non-compliant data can traverse network boundaries, potentially leading to system compromise or data exfiltration."
        },
        {
            "id": "3.1.15e",
            "order": 14,
            "family": "Access Control",
            "title": "Data Type Identifiers",
            "assessment_question": "Are data type identifiers (e.g., file signatures) used to validate data before it is transferred between security domains?",
            "gap_description": "Relying on simple filenames for data identification is insecure. Without proper data type validation, an attacker could disguise malicious code as a benign file to bypass security controls."
        },
        {
            "id": "3.1.16e",
            "order": 15,
            "family": "Access Control",
            "title": "Decomposition Into Policy-Relevant Subcomponents",
            "assessment_question": "Is CUI decomposed into policy-relevant subcomponents for inspection by policy enforcement mechanisms when being transferred between security domains?",
            "gap_description": "Transferring complex data objects as a single unit prevents granular policy enforcement, increasing the risk that unsanctioned information within the object will cross security boundaries."
        },
        {
            "id": "3.1.17e",
            "order": 16,
            "family": "Access Control",
            "title": "Detection of Unsanctioned CUI",
            "assessment_question": "Is CUI examined for the presence of unsanctioned information (e.g., malicious code, inappropriate content) before being transferred between security domains?",
            "gap_description": "Failure to inspect CUI for unsanctioned information allows a potential channel for malware propagation or data leakage across trusted network boundaries."
        },
        {
            "id": "3.2.1e",
            "order": 17,
            "family": "Awareness and Training",
            "title": "Advanced Literacy and Awareness Training",
            "assessment_question": "Are users provided with security literacy training on advanced threats like APTs, how to recognize suspicious activity, and the current cyber threat environment?",
            "gap_description": "A lack of advanced threat awareness training leaves employees, the first line of defense, unprepared to recognize and respond to sophisticated phishing and social engineering attacks."
        },
        {
            "id": "3.2.2e",
            "order": 18,
            "family": "Awareness and Training",
            "title": "Literacy and Awareness Training Practical Exercises",
            "assessment_question": "Does security literacy training include practical exercises, such as simulated phishing attacks or social engineering attempts?",
            "gap_description": "Theoretical training alone is insufficient. Without practical exercises, it is difficult to assess and improve an employee's ability to apply security knowledge in real-world scenarios."
        },
        {
            "id": "3.2.3e",
            "order": 19,
            "family": "Awareness and Training",
            "title": "Literacy and Awareness Training Feedback",
            "assessment_question": "Is feedback on the results of security training provided to relevant personnel and management?",
            "gap_description": "Without a feedback loop, management remains unaware of security weaknesses within the workforce, and the training program cannot be effectively evaluated or improved."
        },
        {
            "id": "3.2.4e",
            "order": 20,
            "family": "Awareness and Training",
            "title": "Anti-Counterfeit Training",
            "assessment_question": "Are relevant personnel trained to detect counterfeit system components (hardware, software, firmware)?",
            "gap_description": "Untrained personnel may unknowingly introduce counterfeit components into the environment, which can contain hidden backdoors, malware, or fail unexpectedly, posing a significant security risk."
        },
        {
            "id": "3.3.1e",
            "order": 21,
            "family": "Audit and Accountability",
            "title": "Protection of Audit Record Storage in Separate Physical Systems or Components",
            "assessment_question": "Are audit records stored in a repository that is on a physically separate system or component from the system being audited?",
            "gap_description": "Storing audit logs on the same system they monitor makes them vulnerable to tampering or deletion if that system is compromised, effectively allowing an attacker to erase their tracks."
        },
        {
            "id": "3.3.2e",
            "order": 22,
            "family": "Audit and Accountability",
            "title": "Real-Time Alerts for Audit Processing Failures",
            "assessment_question": "Are real-time alerts generated and sent to security personnel when critical audit logging failures occur?",
            "gap_description": "If audit logging fails silently, a critical visibility gap is created. Attackers could perform malicious actions during this time without any record being generated, hindering detection and investigation."
        },
        {
            "id": "3.3.3e",
            "order": 23,
            "family": "Audit and Accountability",
            "title": "Dual Authorization for Audit Information and Actions",
            "assessment_question": "Is dual authorization required for the movement or deletion of audit information?",
            "gap_description": "Allowing a single individual to move or delete audit logs creates an opportunity for a malicious insider or an attacker with a single compromised account to cover their tracks by destroying evidence."
        },
        {
            "id": "3.3.4e",
            "order": 24,
            "family": "Audit and Accountability",
            "title": "Integrated Analysis of Audit Records",
            "assessment_question": "Is the analysis of audit records integrated with other security information sources (e.g., vulnerability scans, performance data) to enhance threat detection?",
            "gap_description": "Analyzing audit logs in isolation provides limited context. Without integrating multiple data sources, it is difficult to correlate events and identify complex or low-and-slow attack patterns."
        },
        {
            "id": "3.4.2e",
            "order": 25,
            "family": "Configuration Management",
            "title": "Automated Unauthorized Component Detection",
            "assessment_question": "Are automated mechanisms used to detect unauthorized or misconfigured system components on the network, with defined actions for remediation?",
            "gap_description": "Manual detection of rogue or misconfigured devices is not scalable. An automated system is necessary to quickly identify and isolate unauthorized components before they can be exploited."
        },
        {
            "id": "3.4.3e",
            "order": 26,
            "family": "Configuration Management",
            "title": "Automated Maintenance of System Component Inventory",
            "assessment_question": "Are automated mechanisms used to maintain a current, complete, and accurate inventory of all system components?",
            "gap_description": "An inaccurate or outdated inventory means you cannot effectively protect what you do not know you have. This leads to unpatched and unmonitored systems that are prime targets for attackers."
        },
        {
            "id": "3.4.4e",
            "order": 27,
            "family": "Configuration Management",
            "title": "Automation Support for Baseline Configuration",
            "assessment_question": "Does the organization use automated mechanisms to maintain the baseline configurations of its systems?",
            "gap_description": "Manual configuration management leads to inconsistent system states and configuration drift, creating security gaps and vulnerabilities across the enterprise."
        },
        {
            "id": "3.4.5e",
            "order": 28,
            "family": "Configuration Management",
            "title": "Dual Authorization for System Changes",
            "assessment_question": "Is dual authorization enforced for implementing changes to critical system components or system-level information?",
            "gap_description": "Without a two-person control for critical changes, a single person can introduce a misconfiguration or malicious change that could cause a system-wide outage or security breach."
        },
        {
            "id": "3.4.6e",
            "order": 29,
            "family": "Configuration Management",
            "title": "Retention of Previous Configurations",
            "assessment_question": "Does the organization retain previous versions of system baseline configurations to support rollback capabilities?",
            "gap_description": "Failure to retain previous configurations makes it difficult or impossible to quickly recover from a failed or malicious change, leading to extended downtime and operational disruption."
        },
        {
            "id": "3.4.7e",
            "order": 30,
            "family": "Configuration Management",
            "title": "Testing, Validation, and Documentation of Changes",
            "assessment_question": "Are all changes to the system thoroughly tested, validated, and documented before being implemented in the production environment?",
            "gap_description": "Implementing untested changes directly into production is a primary cause of system instability, security vulnerabilities, and unplanned outages."
        },
        {
            "id": "3.4.8e",
            "order": 31,
            "family": "Configuration Management",
            "title": "Centralized Repository",
            "assessment_question": "Is there a centralized repository for the inventory of system components?",
            "gap_description": "A decentralized or non-existent inventory makes it extremely difficult to perform efficient asset management, vulnerability assessment, and incident response."
        },
        {
            "id": "3.5.1e",
            "order": 32,
            "family": "Identification and Authentication",
            "title": "Cryptographic Bidirectional Authentication",
            "assessment_question": "Are devices authenticated using cryptographically-based bidirectional (mutual) authentication before a connection is established?",
            "gap_description": "One-way authentication allows an attacker to potentially impersonate a legitimate system or endpoint, enabling man-in-the-middle attacks and unauthorized access."
        },
        {
            "id": "3.5.2e",
            "order": 33,
            "family": "Identification and Authentication",
            "title": "Password Managers",
            "assessment_question": "Does the organization employ and enforce the use of approved password managers to generate and manage complex passwords?",
            "gap_description": "Users left to their own devices will reuse simple passwords. A lack of password manager enforcement leads to weak and reused credentials that are easily compromised."
        },
        {
            "id": "3.5.3e",
            "order": 34,
            "family": "Identification and Authentication",
            "title": "Device Attestation",
            "assessment_question": "Is device identification and authentication based on attestation of the device's configuration and known operating state?",
            "gap_description": "Authenticating users without verifying the security posture of their device allows a compromised endpoint to connect to the network, bypassing security controls and introducing significant risk."
        },
        {
            "id": "3.5.4e",
            "order": 35,
            "family": "Identification and Authentication",
            "title": "No Embedded Unencrypted Static Authenticators",
            "assessment_question": "Are unencrypted static authenticators (like passwords or keys) prohibited from being embedded in applications, scripts, or other forms of static storage?",
            "gap_description": "Embedding clear-text credentials in code or configuration files is a critical vulnerability that provides an attacker with easy access to sensitive systems if the code is ever exposed."
        },
        {
            "id": "3.5.5e",
            "order": 36,
            "family": "Identification and Authentication",
            "title": "Expiration of Cached Authenticators",
            "assessment_question": "Is the use of cached authenticators for local logon prohibited after a defined period of time?",
            "gap_description": "Stale cached authenticators can be targeted by attackers to gain access to a system, even if the user's network password has been changed or their account disabled."
        },
        {
            "id": "3.5.6e",
            "order": 37,
            "family": "Identification and Authentication",
            "title": "Identity Proofing",
            "assessment_question": "Are users who require system access properly identity-proofed according to the appropriate identity assurance level?",
            "gap_description": "Weak identity proofing processes can lead to the creation of fraudulent accounts, allowing unauthorized individuals to gain access to systems and information."
        },
        {
            "id": "3.5.7e",
            "order": 38,
            "family": "Identification and Authentication",
            "title": "Identity Providers and Authorization Servers",
            "assessment_question": "Does the organization employ identity providers and authorization servers (e.g., for Single Sign-On) to centrally manage identities and access rights?",
            "gap_description": "Managing identities and authentication on a per-application basis is inefficient and insecure. Centralized identity management is crucial for consistent policy enforcement and streamlined access control."
        },
        {
            "id": "3.6.1e",
            "order": 39,
            "family": "Incident Response",
            "title": "Security Operations Center",
            "assessment_question": "Has the organization established and maintained a Security Operations Center (SOC) for ongoing monitoring, detection, and response?",
            "gap_description": "Without a dedicated SOC, security monitoring and incident response are often ad-hoc and reactive, leading to longer detection times and greater damage from security incidents."
        },
        {
            "id": "3.6.2e",
            "order": 40,
            "family": "Incident Response",
            "title": "Integrated Incident Response Team",
            "assessment_question": "Has an integrated incident response team been established that can be deployed quickly to any location as needed?",
            "gap_description": "A lack of a formal, integrated incident response team results in a chaotic and ineffective response, increasing the time to containment and recovery."
        },
        {
            "id": "3.6.3e",
            "order": 41,
            "family": "Incident Response",
            "title": "Behavior Analysis",
            "assessment_question": "Is anomalous or suspected adversarial behavior analyzed to understand adversary tactics, techniques, and procedures (TTPs)?",
            "gap_description": "Failing to analyze adversary behavior means the organization loses a critical opportunity to learn from an attack and improve its defenses against future, similar incidents."
        },
        {
            "id": "3.6.4e",
            "order": 42,
            "family": "Incident Response",
            "title": "Automated Tracking, Data Collection, and Analysis for Incident Monitoring",
            "assessment_question": "Are automated mechanisms used to track incidents and to collect and analyze incident information?",
            "gap_description": "Manual incident tracking and data collection is slow and prone to error, hindering the ability of the response team to gain situational awareness and act effectively during an incident."
        },
        {
            "id": "3.7.1e",
            "order": 43,
            "family": "Maintenance",
            "title": "Software Updates and Patches for Maintenance Tools",
            "assessment_question": "Are maintenance tools (e.g., administrator laptops, diagnostic software) inspected to ensure they have the latest software updates and patches installed?",
            "gap_description": "Unpatched maintenance tools provide a powerful attack vector. If a privileged tool is compromised, it can be used by an attacker to compromise the entire environment."
        },
        {
            "id": "3.8.1e",
            "order": 44,
            "family": "Media Protection",
            "title": "Dual Authorization for Media Sanitization",
            "assessment_question": "Is dual authorization enforced for the sanitization of system media containing CUI?",
            "gap_description": "Without dual authorization, a single individual could improperly sanitize media—either accidentally or maliciously—leading to data loss or the exposure of sensitive CUI."
        },
        {
            "id": "3.8.2e",
            "order": 45,
            "family": "Media Protection",
            "title": "Dual Authorization for System Backup Deletion and Destruction",
            "assessment_question": "Is dual authorization enforced for the deletion or destruction of system backup information?",
            "gap_description": "Allowing a single person to delete backups creates a critical single point of failure. An attacker or disgruntled employee could destroy all backups, making recovery from a ransomware attack or system failure impossible."
        },
        {
            "id": "3.8.3e",
            "order": 46,
            "family": "Media Protection",
            "title": "Testing System Backups for Reliability and Integrity",
            "assessment_question": "Is backup information tested periodically to verify media reliability and information integrity?",
            "gap_description": "Untested backups are unreliable. Failure to regularly test backups can lead to the discovery, only after a disaster, that the backups are corrupted and unusable."
        },
        {
            "id": "3.8.4e",
            "order": 47,
            "family": "Media Protection",
            "title": "System Recovery and Reconstitution",
            "assessment_question": "Does the organization have the capability to recover and reconstitute the system to a known state within a defined time period after a disruption?",
            "gap_description": "Without a defined and tested recovery capability, the organization will face extended and unpredictable downtime after a major incident, impacting operations and reputation."
        },
        {
            "id": "3.9.3e",
            "order": 48,
            "family": "Personnel Security",
            "title": "Access Agreements",
            "assessment_question": "Are access agreements (e.g., acceptable use policies, NDAs) documented, reviewed, and signed by individuals before they are granted access to CUI?",
            "gap_description": "Failure to enforce signed access agreements means there is no formal acknowledgment of user responsibilities, weakening the organization's position in holding individuals accountable for security violations."
        },
        {
            "id": "3.9.4e",
            "order": 49,
            "family": "Personnel Security",
            "title": "Citizenship Requirements",
            "assessment_question": "Does the organization verify that individuals accessing systems with CUI meet defined citizenship requirements, where applicable?",
            "gap_description": "For certain types of CUI, failing to verify citizenship can be a direct violation of legal or contractual requirements, leading to severe penalties and loss of trust."
        },
        {
            "id": "3.10.1e",
            "order": 50,
            "family": "Physical Protection",
            "title": "Intrusion Alarms and Surveillance Equipment",
            "assessment_question": "Is physical access to facilities containing CUI-processing systems monitored using physical intrusion alarms and surveillance equipment?",
            "gap_description": "A lack of physical intrusion alarms and surveillance means a physical breach could go undetected, allowing an intruder time to steal equipment or tamper with systems."
        },
        {
            "id": "3.10.2e",
            "order": 51,
            "family": "Physical Protection",
            "title": "Delivery and Removal of System Components",
            "assessment_question": "Are the delivery and removal of system components into and out of the facility authorized, controlled, and recorded?",
            "gap_description": "Uncontrolled delivery and removal of hardware creates opportunities for the introduction of tampered or counterfeit devices, or the theft of sensitive equipment and data."
        },
        {
            "id": "3.11.1e",
            "order": 52,
            "family": "Risk Assessment",
            "title": "Threat Awareness Program",
            "assessment_question": "Has the organization implemented a threat awareness program that includes a capability for sharing threat intelligence across the organization?",
            "gap_description": "Without a formal threat awareness and sharing program, security teams operate in silos with an incomplete picture of the threat landscape, hindering proactive defense."
        },
        {
            "id": "3.11.2e",
            "order": 53,
            "family": "Risk Assessment",
            "title": "Threat Hunting",
            "assessment_question": "Does the organization have a cyber threat-hunting capability to proactively search for indicators of compromise and detect threats that evade existing defenses?",
            "gap_description": "Relying only on passive, signature-based defenses is insufficient against advanced attackers. A lack of threat hunting means sophisticated adversaries can dwell in the network for long periods undetected."
        },
        {
            "id": "3.11.3e",
            "order": 54,
            "family": "Risk Assessment",
            "title": "Predictive Cyber Analytics",
            "assessment_question": "Does the organization employ advanced automation and analytics capabilities to predict and identify risks to systems?",
            "gap_description": "Manually analyzing massive volumes of security data is impossible. Without predictive analytics, organizations remain in a reactive posture, unable to anticipate and preempt emerging threats."
        },
        {
            "id": "3.11.8e",
            "order": 55,
            "family": "Risk Assessment",
            "title": "Dynamic Threat Awareness",
            "assessment_question": "Does the organization determine the current cyber threat environment on an ongoing basis to inform its security posture?",
            "gap_description": "A static security posture that does not adapt to the changing threat environment quickly becomes obsolete and ineffective against new adversary TTPs."
        },
        {
            "id": "3.11.9e",
            "order": 56,
            "family": "Risk Assessment",
            "title": "Indicators of Compromise",
            "assessment_question": "Are indicators of compromise (IOCs) from defined sources discovered, collected, and distributed to relevant personnel and security tools?",
            "gap_description": "Failure to operationalize IOCs means the organization is not leveraging valuable threat intelligence to detect and block known malicious activity, effectively fighting blind."
        },
        {
            "id": "3.11.10e",
            "order": 57,
            "family": "Risk Assessment",
            "title": "Criticality Analysis",
            "assessment_question": "Is a criticality analysis performed to identify critical system components and functions at key points in the system development life cycle?",
            "gap_description": "Without a criticality analysis, security resources may be misallocated, leaving the most important mission-essential systems under-protected and vulnerable to disruption."
        },
        {
            "id": "3.11.11e",
            "order": 58,
            "family": "Risk Assessment",
            "title": "Discoverable Information",
            "assessment_question": "Does the organization determine what information about its systems is discoverable by an adversary from public sources and take corrective action?",
            "gap_description": "Information leakage (e.g., software versions, network diagrams) provides adversaries with valuable reconnaissance data, making it easier for them to plan and execute a successful attack."
        },
        {
            "id": "3.11.12e",
            "order": 59,
            "family": "Risk Assessment",
            "title": "Automated Means for Sharing Threat Intelligence",
            "assessment_question": "Are automated mechanisms employed to maximize the effectiveness and speed of sharing threat intelligence information?",
            "gap_description": "Manual threat intelligence sharing is too slow to be effective against modern automated attacks. Without automation, defenses cannot keep pace with the speed of threats."
        },
        {
            "id": "3.12.1e",
            "order": 60,
            "family": "Security Assessment and Monitoring",
            "title": "Penetration Testing",
            "assessment_question": "Is penetration testing conducted at a defined frequency on specified systems or components to identify and validate vulnerabilities?",
            "gap_description": "Without regular penetration testing, an organization has an incomplete and unverified understanding of its security posture, leaving unknown and exploitable vulnerabilities exposed to attackers."
        },
        {
            "id": "3.12.2e",
            "order": 61,
            "family": "Security Assessment and Monitoring",
            "title": "Independent Assessors",
            "assessment_question": "Are independent assessors or assessment teams used to conduct security assessments?",
            "gap_description": "Internal assessments can lack impartiality and rigor. The absence of an independent assessment can lead to a false sense of security and overlook critical vulnerabilities."
        },
        {
            "id": "3.12.3e",
            "order": 62,
            "family": "Security Assessment and Monitoring",
            "title": "Risk Monitoring",
            "assessment_question": "Is risk monitoring integrated into the continuous monitoring strategy, covering effectiveness, compliance, and changes to the system?",
            "gap_description": "A continuous monitoring strategy that only focuses on compliance fails to provide a true picture of risk. Without holistic risk monitoring, changes in the threat landscape or system architecture can create unmanaged risks."
        },
        {
            "id": "3.12.4e",
            "order": 63,
            "family": "Security Assessment and Monitoring",
            "title": "Internal System Connections",
            "assessment_question": "Are all internal connections between system components authorized, documented, and reviewed periodically for continued need?",
            "gap_description": "Unmanaged or unnecessary internal connections increase the internal attack surface, making it easier for an attacker who has gained a foothold to move laterally through the network."
        },
        {
            "id": "3.13.1e",
            "order": 64,
            "family": "System and Communications Protection",
            "title": "Heterogeneity",
            "assessment_question": "Does the organization employ a diverse set of information technologies (e.g., from different vendors) for critical system components to reduce common mode failures?",
            "gap_description": "A monoculture of technology (e.g., all one OS, all one vendor) is fragile. A single vulnerability or supply chain attack could compromise the entire enterprise simultaneously."
        },
        {
            "id": "3.13.2e",
            "order": 65,
            "family": "System and Communications Protection",
            "title": "Randomness",
            "assessment_question": "Are techniques used to introduce randomness into organizational operations and assets to increase uncertainty for attackers?",
            "gap_description": "Predictable, static systems are easier for adversaries to target. A lack of randomness in defenses allows attackers to reliably plan their actions and anticipate system behavior."
        },
        {
            "id": "3.13.3e",
            "order": 66,
            "family": "System and Communications Protection",
            "title": "Concealment and Misdirection",
            "assessment_question": "Are concealment and misdirection techniques (e.g., honeypots, virtualization) employed to mislead and confuse adversaries?",
            "gap_description": "Without misdirection, attackers can map and target the real production environment with high confidence. Deception techniques can waste attacker time and reveal their TTPs."
        },
        {
            "id": "3.13.4e",
            "order": 67,
            "family": "System and Communications Protection",
            "title": "Isolation of System Components",
            "assessment_question": "Are boundary protection mechanisms used to isolate critical system components from the rest of the network?",
            "gap_description": "A flat network architecture allows an attacker who compromises a low-security system (like a workstation) to easily attack high-value assets (like a database server). Isolation contains the blast radius of a compromise."
        },
        {
            "id": "3.13.5e",
            "order": 68,
            "family": "System and Communications Protection",
            "title": "Change Processing and Storage Locations",
            "assessment_question": "Does the organization periodically or randomly change the location of processing and/or storage for critical systems (i.e., employ moving target defense)?",
            "gap_description": "Static target systems give an adversary ample time for reconnaissance and attack planning. Moving target defense increases adversary uncertainty and the cost of an attack."
        },
        {
            "id": "3.13.6e",
            "order": 69,
            "family": "System and Communications Protection",
            "title": "Platform-Independent Applications",
            "assessment_question": "Does the organization use platform-independent applications to promote portability and reconstitution on different platforms?",
            "gap_description": "Applications tied to a single platform can prevent recovery if that specific platform is compromised or unavailable. Platform independence enhances resiliency."
        },
        {
            "id": "3.13.7e",
            "order": 70,
            "family": "System and Communications Protection",
            "title": "Virtualization Techniques",
            "assessment_question": "Are virtualization techniques used to support a diversity of operating systems and applications that are changed at a defined frequency?",
            "gap_description": "Virtualization provides a powerful tool for resilience and diversity. Not leveraging it limits the ability to quickly provision, isolate, or revert systems to a known-good state."
        },
        {
            "id": "3.13.8e",
            "order": 71,
            "family": "System and Communications Protection",
            "title": "Decoys",
            "assessment_question": "Are decoy systems (e.g., honeypots, honeynets) included within the environment to detect, deflect, and analyze attacks?",
            "gap_description": "Without decoys, all alerts come from production systems, which can be noisy. Decoys provide a high-fidelity signal of malicious activity and can safely reveal attacker methods."
        },
        {
            "id": "3.13.9e",
            "order": 72,
            "family": "System and Communications Protection",
            "title": "Isolation of Security Tools, Mechanisms, and Support Components",
            "assessment_question": "Are information security tools and support components isolated from other internal systems on physically separate subnetworks?",
            "gap_description": "If security tools reside on the same network as production systems, they can be targeted and disabled by an attacker, blinding the defenders during an incident."
        },
        {
            "id": "3.13.10e",
            "order": 73,
            "family": "System and Communications Protection",
            "title": "Separate Subnetworks",
            "assessment_question": "Are separate network addresses (subnets) used to connect to systems in different security domains?",
            "gap_description": "A lack of network segmentation (subnets) creates a flat network where a compromise anywhere can quickly spread everywhere, without any internal boundaries to slow an attacker down."
        },
        {
            "id": "3.13.11e",
            "order": 74,
            "family": "System and Communications Protection",
            "title": "Thin Nodes",
            "assessment_question": "Is minimal functionality and information storage employed on endpoint components (e.g., using thin clients or VDI)?",
            "gap_description": "Traditional 'fat' clients store data locally and have a large attack surface. Thin nodes centralize data and processing, reducing the impact of an endpoint compromise."
        },
        {
            "id": "3.13.12e",
            "order": 75,
            "family": "System and Communications Protection",
            "title": "Denial-of-Service Protection",
            "assessment_question": "Are safeguards employed to protect against or limit the effects of denial-of-service (DoS) attacks?",
            "gap_description": "Without specific DoS protections, critical services can be easily disrupted and made unavailable by an attack, impacting business operations."
        },
        {
            "id": "3.13.13e",
            "order": 76,
            "family": "System and Communications Protection",
            "title": "Port and Input/Output Device Access",
            "assessment_question": "Are unused physical connection ports and I/O devices (e.g., USB ports, optical drives) physically or logically disabled or removed from systems?",
            "gap_description": "Open and active ports on a system provide an easy channel for data exfiltration or the introduction of malware via removable media."
        },
        {
            "id": "3.13.14e",
            "order": 77,
            "family": "System and Communications Protection",
            "title": "Detonation Chambers",
            "assessment_question": "Does the organization employ a detonation chamber (sandbox) capability to safely analyze suspicious files, attachments, or URLs?",
            "gap_description": "Without a sandbox, potentially malicious files must be analyzed on production systems, which is extremely risky. A detonation chamber provides a safe, isolated environment to test for malware."
        },
        {
            "id": "3.13.15e",
            "order": 78,
            "family": "System and Communications Protection",
            "title": "Separate Subnets to Isolate System Components and Functions",
            "assessment_question": "Are physically or logically separate subnetworks used to isolate critical system components and functions from non-critical ones?",
            "gap_description": "Failure to isolate critical functions (e.g., industrial controls) from general corporate networks exposes essential operations to threats originating from less secure environments."
        },
        {
            "id": "3.13.16e",
            "order": 79,
            "family": "System and Communications Protection",
            "title": "System Partitioning",
            "assessment_question": "Is the system partitioned into components residing in separate physical or logical domains based on defined circumstances?",
            "gap_description": "A monolithic system architecture is not resilient. Partitioning allows for defense-in-depth and containment, preventing a failure or compromise in one part of the system from affecting the entire system."
        },
        {
            "id": "3.14.1e",
            "order": 80,
            "family": "System and Information Integrity",
            "title": "Software, Firmware, and Information Integrity",
            "assessment_question": "Are integrity verification tools used to detect unauthorized changes to software, firmware, and information, with defined actions for response?",
            "gap_description": "Without integrity monitoring, an attacker could modify critical system files or configurations to create a backdoor or disable security tools, and the change would go undetected."
        },
        {
            "id": "3.14.4e",
            "order": 81,
            "family": "System and Information Integrity",
            "title": "Refresh From Trusted Sources",
            "assessment_question": "Is software and data used for system refreshes or rebuilds obtained from defined trusted sources?",
            "gap_description": "Restoring a system from an untrusted or compromised source (e.g., a backup infected with malware) will only re-introduce the security problem, undermining the entire recovery effort."
        },
        {
            "id": "3.14.5e",
            "order": 82,
            "family": "System and Information Integrity",
            "title": "Non-Persistent Information",
            "assessment_question": "Is information that is not required for long-term retention made non-persistent (i.e., refreshed periodically or generated on demand and then deleted)?",
            "gap_description": "Retaining sensitive information longer than necessary increases the attack surface and the potential impact of a data breach."
        },
        {
            "id": "3.14.8e",
            "order": 83,
            "family": "System and Information Integrity",
            "title": "Integrity Checks",
            "assessment_question": "Are integrity checks of software, firmware, and information performed at startup, during key transitions, or at a defined frequency?",
            "gap_description": "Infrequent integrity checks allow a compromise to persist. Performing checks at critical times like system startup ensures the system is booting into a known-good state."
        },
        {
            "id": "3.14.9e",
            "order": 84,
            "family": "System and Information Integrity",
            "title": "Cryptographic Protection",
            "assessment_question": "Are cryptographic mechanisms (e.g., digital signatures, signed hashes) implemented to detect unauthorized changes to software, firmware, and information?",
            "gap_description": "Non-cryptographic integrity mechanisms can be easily bypassed. Cryptographic protection provides a high degree of assurance that information has not been tampered with."
        },
        {
            "id": "3.14.10e",
            "order": 85,
            "family": "System and Information Integrity",
            "title": "Protection of Boot Firmware",
            "assessment_question": "Are mechanisms implemented to protect the integrity of boot firmware (e.g., BIOS/UEFI) in system components?",
            "gap_description": "A compromise of the boot firmware (a 'bootkit') is extremely dangerous as it can undermine all higher-level security controls and is very difficult to detect and remove."
        },
        {
            "id": "3.14.11e",
            "order": 86,
            "family": "System and Information Integrity",
            "title": "Integration of Detection and Response",
            "assessment_question": "Is the detection of unauthorized changes to the system incorporated into the organizational incident response capability?",
            "gap_description": "Detecting an unauthorized change is only half the battle. If the detection alert is not fed into a formal incident response process, it may be ignored, and no corrective action will be taken."
        },
        {
            "id": "3.14.12e",
            "order": 87,
            "family": "System and Information Integrity",
            "title": "Information Input Validation",
            "assessment_question": "Is the validity of information inputs (e.g., checking for proper syntax, length, range, and format) checked before processing?",
            "gap_description": "Failure to validate inputs is the root cause of many common vulnerabilities, such as SQL injection and cross-site scripting (XSS), which can lead to system compromise or data theft."
        },
        {
            "id": "3.14.13e",
            "order": 88,
            "family": "System and Information Integrity",
            "title": "Error Handling",
            "assessment_question": "Are error messages generated in a way that provides necessary information for correction without revealing potentially exploitable information?",
            "gap_description": "Verbose error messages can leak sensitive system details (e.g., stack traces, database schemas) that are valuable to an attacker for planning further attacks."
        },
        {
            "id": "3.14.14e",
            "order": 89,
            "family": "System and Information Integrity",
            "title": "Memory Protection",
            "assessment_question": "Are safeguards like Data Execution Prevention (DEP) and Address Space Layout Randomization (ASLR) implemented to protect system memory?",
            "gap_description": "Without memory protection, attackers can more easily execute buffer overflow and other memory corruption attacks, allowing them to run arbitrary code and take control of a system."
        },
        {
            "id": "3.14.15e",
            "order": 90,
            "family": "System and Information Integrity",
            "title": "Non-Persistent System Components and Services",
            "assessment_question": "Are non-persistent system components and services (e.g., virtual machines, containers) implemented, which are initiated from a known state and terminated periodically?",
            "gap_description": "Persistent systems allow malware to survive reboots and maintain a long-term foothold. Non-persistence helps to eliminate advanced threats by periodically reverting to a clean state."
        },
        {
            "id": "3.14.16e",
            "order": 91,
            "family": "System and Information Integrity",
            "title": "Tainting",
            "assessment_question": "Is data or capabilities embedded into systems or components (e.g., 'canary tokens') to determine if CUI has been exfiltrated?",
            "gap_description": "It can be difficult to confirm if data has been exfiltrated. Tainting provides a clear signal when compromised data is accessed externally, enabling faster detection of a breach."
        },
        {
            "id": "3.14.17e",
            "order": 92,
            "family": "System and Information Integrity",
            "title": "System-Generated Alerts",
            "assessment_question": "Do system-generated indicators of compromise or potential compromise trigger alerts to defined security personnel?",
            "gap_description": "If system-level compromise indicators are not generating actionable alerts, then valuable detection opportunities are missed, allowing an incident to escalate."
        },
        {
            "id": "3.14.18e",
            "order": 93,
            "family": "System and Information Integrity",
            "title": "Automated Organization-Generated Alerts",
            "assessment_question": "Do automated mechanisms alert personnel when there are indications of inappropriate or unusual activities with security implications?",
            "gap_description": "Relying on manual review of activity logs is ineffective. Automated alerts for unusual activity are necessary for the timely detection of insider threats or compromised accounts."
        },
        {
            "id": "3.15.1e",
            "order": 94,
            "family": "Planning",
            "title": "Security Architecture",
            "assessment_question": "Has a security architecture for the system been developed and maintained, describing security requirements, integration with the enterprise, and external dependencies?",
            "gap_description": "Without a formal security architecture, security controls are implemented in an ad-hoc manner, leading to gaps in coverage, inconsistencies, and a brittle security posture."
        },
        {
            "id": "3.15.2e",
            "order": 95,
            "family": "Planning",
            "title": "Defense In Depth",
            "assessment_question": "Is the security architecture designed using a defense-in-depth approach, with coordinated security requirements allocated to different architectural layers?",
            "gap_description": "A lack of defense-in-depth means a single security failure can lead to a full system compromise. Layered, mutually reinforcing controls are necessary to create a resilient defense."
        },
        {
            "id": "3.15.3e",
            "order": 96,
            "family": "Planning",
            "title": "Supplier Diversity",
            "assessment_question": "Are security safeguards allocated to different locations and layers obtained from different suppliers to avoid a single point of failure?",
            "gap_description": "Relying on a single supplier for a critical security function creates a monoculture. A vulnerability in that supplier's product would affect all layers of defense simultaneously."
        },
        {
            "id": "3.16.1e",
            "order": 97,
            "family": "System and Services Acquisition",
            "title": "Specialization",
            "assessment_question": "Are systems or components supporting mission-essential functions specially designed, modified, or configured to increase their trustworthiness?",
            "gap_description": "Using general-purpose, off-the-shelf systems for mission-essential functions may not provide the required level of trustworthiness, leaving critical operations vulnerable."
        },
        {
            "id": "3.17.1e",
            "order": 98,
            "family": "Supply Chain Risk Management",
            "title": "Notification Agreements",
            "assessment_question": "Are agreements in place with supply chain entities for the notification of compromises, audit results, or other defined security information?",
            "gap_description": "Without formal notification agreements, an organization may be unaware of a compromise in its supply chain that directly affects its own security, leaving it vulnerable."
        },
        {
            "id": "3.17.2e",
            "order": 99,
            "family": "Supply Chain Risk Management",
            "title": "Inspection of Systems or Components",
            "assessment_question": "Are systems or components inspected periodically or upon specific indications to detect physical or logical tampering?",
            "gap_description": "Failure to inspect components can allow tampered or counterfeit hardware and software to be introduced into the environment, potentially with hidden backdoors or malicious functions."
        },
        {
            "id": "3.17.3e",
            "order": 100,
            "family": "Supply Chain Risk Management",
            "title": "Component Authenticity",
            "assessment_question": "Has the organization developed and implemented anti-counterfeit policies and procedures to detect and prevent counterfeit components from entering the system?",
            "gap_description": "Without anti-counterfeit measures, the organization is at risk of acquiring and deploying components that are unreliable, malicious, or infringe on intellectual property, creating significant operational and security risks."
        },
        {
            "id": "3.17.4e",
            "order": 101,
            "family": "Supply Chain Risk Management",
            "title": "Provenance",
            "assessment_question": "Is the provenance (chronology of origin, development, ownership, and changes) of critical systems, components, and CUI documented, monitored, and maintained?",
            "gap_description": "A lack of provenance makes it impossible to establish a chain of custody for critical assets, meaning you cannot be certain of their origin or whether they have been tampered with during their lifecycle."
        },
        {
            "id": "3.17.5e",
            "order": 102,
            "family": "Supply Chain Risk Management",
            "title": "Supply Chain Integrity - Pedigree",
            "assessment_question": "Are safeguards and analysis employed to ensure the integrity of systems by validating the internal composition and provenance (pedigree) of critical technologies?",
            "gap_description": "Without validating the pedigree of components (e.g., through a Software Bill of Materials), the organization cannot be sure of the internal composition of its technology, creating risks from vulnerable or malicious sub-components."
        }
    ]
});
