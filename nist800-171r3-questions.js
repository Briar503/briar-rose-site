loadNIST800171Framework({
    name: "NIST SP 800-171r3",
    description: "Based on NIST Special Publication 800-171 Revision 3",
    questions: [
        {
            "id": "03.01.01",
            "order": 1,
            "family": "Access Control",
            "title": "Account Management",
            "assessment_question": "Does the organization manage system accounts by defining account types; creating, enabling, modifying, disabling, and removing them in accordance with policy; specifying authorizations; authorizing access based on intended usage; monitoring usage; disabling inactive accounts; and notifying managers of changes?",
            "gap_description": "Without proper account management, the organization is exposed to risks from orphaned accounts, privilege creep, and unauthorized access, increasing the likelihood of a security breach."
        },
        {
            "id": "03.01.02",
            "order": 2,
            "family": "Access Control",
            "title": "Access Enforcement",
            "assessment_question": "Does the organization enforce approved authorizations for logical access to CUI and system resources in accordance with applicable access control policies?",
            "gap_description": "Failure to enforce access control policies can allow users or processes to gain unauthorized access to CUI, leading to data exfiltration or system compromise."
        },
        {
            "id": "03.01.03",
            "order": 3,
            "family": "Access Control",
            "title": "Information Flow Enforcement",
            "assessment_question": "Does the organization enforce approved authorizations for controlling the flow of CUI within the system and between connected systems?",
            "gap_description": "Without information flow control, sensitive CUI can be transmitted to unauthorized systems or external networks, resulting in a data breach and non-compliance."
        },
        {
            "id": "03.01.04",
            "order": 4,
            "family": "Access Control",
            "title": "Separation of Duties",
            "assessment_question": "Does the organization identify the duties of individuals requiring separation and define system access authorizations to support that separation?",
            "gap_description": "A lack of separation of duties allows a single individual to potentially execute malicious activities or commit fraud without collusion, significantly increasing the risk of insider threats."
        },
        {
            "id": "03.01.05",
            "order": 5,
            "family": "Access Control",
            "title": "Least Privilege",
            "assessment_question": "Does the organization enforce least privilege by allowing only necessary access, authorizing access to defined security functions, reviewing privileges periodically, and reassigning or removing privileges as needed?",
            "gap_description": "Failure to enforce the principle of least privilege results in users having excessive permissions, which increases the potential damage from a compromised account or insider threat."
        },
        {
            "id": "03.01.06",
            "order": 6,
            "family": "Access Control",
            "title": "Least Privilege - Privileged Accounts",
            "assessment_question": "Are privileged accounts restricted to defined personnel or roles, and are users with privileged accounts required to use non-privileged accounts for non-security functions?",
            "gap_description": "Using privileged accounts for routine, non-security tasks unnecessarily exposes powerful credentials to risk, increasing the chances of a system-wide compromise if the account is hijacked."
        },
        {
            "id": "03.01.07",
            "order": 7,
            "family": "Access Control",
            "title": "Least Privilege - Privileged Functions",
            "assessment_question": "Are non-privileged users prevented from executing privileged functions, and is the execution of privileged functions logged?",
            "gap_description": "Allowing non-privileged users to execute privileged functions can lead to unauthorized changes to the system, bypass of security controls, and compromise of system integrity."
        },
        {
            "id": "03.01.08",
            "order": 8,
            "family": "Access Control",
            "title": "Unsuccessful Logon Attempts",
            "assessment_question": "Does the organization enforce a limit on consecutive invalid logon attempts and automatically take action (e.g., lock the account) when the maximum number of unsuccessful attempts is exceeded?",
            "gap_description": "Without a limit on unsuccessful logon attempts, systems are vulnerable to automated brute-force attacks that can eventually guess passwords and lead to unauthorized access."
        },
        {
            "id": "03.01.09",
            "order": 9,
            "family": "Access Control",
            "title": "System Use Notification",
            "assessment_question": "Does the system display a use notification message with privacy and security notices consistent with CUI rules before granting access?",
            "gap_description": "The absence of a system use notification fails to establish a legal basis for monitoring and holding users accountable for their actions on the system."
        },
        {
            "id": "03.01.10",
            "order": 10,
            "family": "Access Control",
            "title": "Device Lock",
            "assessment_question": "Does the organization prevent system access by initiating a device lock after a defined period of inactivity (or requiring a user-initiated lock), retaining the lock until re-authentication, and concealing information on the locked display?",
            "gap_description": "An unattended and unlocked workstation provides an immediate opportunity for an unauthorized individual to gain physical access to CUI and compromise the system."
        },
        {
            "id": "03.01.11",
            "order": 11,
            "family": "Access Control",
            "title": "Session Termination",
            "assessment_question": "Does the system automatically terminate a user session after organization-defined conditions or trigger events?",
            "gap_description": "Failure to automatically terminate sessions leaves them open to hijacking, which allows an attacker to gain unauthorized access using an already authenticated session."
        },
        {
            "id": "03.01.12",
            "order": 12,
            "family": "Access Control",
            "title": "Remote Access",
            "assessment_question": "Does the organization establish and authorize remote access requirements, route remote access through managed points, and authorize the remote execution of privileged commands?",
            "gap_description": "Unmanaged and unsecured remote access creates uncontrolled entry points into the network, significantly increasing the risk of compromise from external threats."
        },
        {
            "id": "03.01.16",
            "order": 13,
            "family": "Access Control",
            "title": "Wireless Access",
            "assessment_question": "Does the organization establish and authorize wireless access requirements, disable unused wireless capabilities, and protect wireless access using authentication and encryption?",
            "gap_description": "Insecure wireless networks can be easily intercepted or breached by attackers, providing them with a direct path into the internal network and access to CUI."
        },
        {
            "id": "03.01.18",
            "order": 14,
            "family": "Access Control",
            "title": "Access Control for Mobile Devices",
            "assessment_question": "Does the organization establish usage restrictions for mobile devices, authorize their connection to the system, and implement full-device or container-based encryption to protect CUI?",
            "gap_description": "Without strong controls and encryption, the loss or theft of a mobile device can result in a direct breach of the CUI it contains or provides access to."
        },
        {
            "id": "03.01.20",
            "order": 15,
            "family": "Access Control",
            "title": "Use of External Systems",
            "assessment_question": "Does the organization prohibit the use of unauthorized external systems, establish security requirements for their use, and restrict the use of organization-controlled portable storage on such systems?",
            "gap_description": "Allowing the uncontrolled use of external or personally-owned systems introduces untrusted devices into the environment, increasing the risk of malware infection and CUI exfiltration."
        },
        {
            "id": "03.01.22",
            "order": 16,
            "family": "Access Control",
            "title": "Publicly Accessible Content",
            "assessment_question": "Are authorized individuals trained to ensure publicly accessible information does not contain CUI, and is public content reviewed for CUI and removed if discovered?",
            "gap_description": "Failure to control publicly accessible content can lead to the inadvertent disclosure of CUI, resulting in a significant data breach and violation of federal regulations."
        },
        {
            "id": "03.02.01",
            "order": 17,
            "family": "Awareness and Training",
            "title": "Literacy Training and Awareness",
            "assessment_question": "Does the organization provide security literacy training to users initially and periodically, covering topics such as insider threats, social engineering, and social mining, and is the content updated regularly?",
            "gap_description": "An untrained workforce is highly susceptible to phishing and social engineering attacks, making employees the weakest link in the organization's security posture."
        },
        {
            "id": "03.02.02",
            "order": 18,
            "family": "Awareness and Training",
            "title": "Role-Based Training",
            "assessment_question": "Does the organization provide role-based security training to personnel before authorizing access, when system changes occur, and periodically thereafter, with regularly updated content?",
            "gap_description": "Without role-specific security training, personnel may not possess the necessary knowledge to securely perform their duties, leading to misconfigurations and security vulnerabilities."
        },
        {
            "id": "03.03.01",
            "order": 19,
            "family": "Audit and Accountability",
            "title": "Event Logging",
            "assessment_question": "Does the organization specify and review the event types to be logged within the system?",
            "gap_description": "Without logging critical security events, the organization is blind to attacks and policy violations, making it impossible to detect, investigate, or respond to incidents."
        },
        {
            "id": "03.03.02",
            "order": 20,
            "family": "Audit and Accountability",
            "title": "Audit Record Content",
            "assessment_question": "Do audit records include the type, time, location, source, outcome, and identity associated with the event?",
            "gap_description": "Incomplete audit records lack the necessary details to reconstruct events during an investigation, severely hindering forensic analysis and incident response."
        },
        {
            "id": "03.03.03",
            "order": 21,
            "family": "Audit and Accountability",
            "title": "Audit Record Generation",
            "assessment_question": "Are audit records generated for the selected event types and retained for a time period consistent with the records retention policy?",
            "gap_description": "Failure to generate and retain audit logs means no evidence is available to investigate security incidents, policy violations, or fraudulent activity."
        },
        {
            "id": "03.03.04",
            "order": 22,
            "family": "Audit and Accountability",
            "title": "Response to Audit Logging Process Failures",
            "assessment_question": "Does the organization alert personnel in the event of an audit logging process failure and take defined additional actions?",
            "gap_description": "If the audit logging process fails silently, a critical visibility gap is created, allowing an attacker to operate undetected without leaving any trace."
        },
        {
            "id": "03.03.05",
            "order": 23,
            "family": "Audit and Accountability",
            "title": "Audit Record Review, Analysis, and Reporting",
            "assessment_question": "Are system audit records reviewed and analyzed periodically for unusual activity, with findings reported, and are records from different repositories correlated?",
            "gap_description": "If audit logs are not regularly reviewed, indicators of compromise, insider threats, and security policy violations can go unnoticed for extended periods, allowing threats to persist."
        },
        {
            "id": "03.03.06",
            "order": 24,
            "family": "Audit and Accountability",
            "title": "Audit Record Reduction and Report Generation",
            "assessment_question": "Does the organization implement an audit record reduction and report generation capability that preserves the original content and time ordering of records?",
            "gap_description": "Without the ability to reduce and summarize massive volumes of audit data, security analysts will be overwhelmed and unable to identify actual security events from routine noise."
        },
        {
            "id": "03.03.07",
            "order": 25,
            "family": "Audit and Accountability",
            "title": "Time Stamps",
            "assessment_question": "Does the system use internal clocks to generate time stamps for audit records that meet a defined granularity and use Coordinated Universal Time (UTC) or a defined offset?",
            "gap_description": "Inaccurate or non-standardized time stamps make it impossible to correlate security events across different systems, which is critical for effective incident investigation."
        },
        {
            "id": "03.03.08",
            "order": 26,
            "family": "Audit and Accountability",
            "title": "Protection of Audit Information",
            "assessment_question": "Are audit information and audit logging tools protected from unauthorized access, modification, and deletion, with management access restricted to a subset of privileged users?",
            "gap_description": "If audit logs are not adequately protected, an attacker can tamper with or delete them to cover their tracks, making it impossible to determine the scope and impact of a security breach."
        },
        {
            "id": "03.04.01",
            "order": 27,
            "family": "Configuration Management",
            "title": "Baseline Configuration",
            "assessment_question": "Does the organization develop, maintain, review, and update a current baseline configuration of the system under configuration control?",
            "gap_description": "Without a documented and maintained baseline configuration, system deployments are likely to be inconsistent and insecure, leading to widespread, unmanaged vulnerabilities."
        },
        {
            "id": "03.04.02",
            "order": 28,
            "family": "Configuration Management",
            "title": "Configuration Settings",
            "assessment_question": "Does the organization establish, document, and implement configuration settings that reflect the most restrictive mode consistent with operational requirements, and are deviations identified and approved?",
            "gap_description": "Failure to establish secure configuration settings leaves systems operating in a default, often insecure state, making them easy targets for attackers."
        },
        {
            "id": "03.04.03",
            "order": 29,
            "family": "Configuration Management",
            "title": "Configuration Change Control",
            "assessment_question": "Does the organization define, review, approve, implement, and monitor configuration-controlled changes to the system with explicit consideration for security impacts?",
            "gap_description": "Uncontrolled changes to systems can introduce new security vulnerabilities, cause system instability, and result in non-compliance with security policies."
        },
        {
            "id": "03.04.04",
            "order": 30,
            "family": "Configuration Management",
            "title": "Impact Analyses",
            "assessment_question": "Are changes to the system analyzed to determine potential security impacts prior to implementation, and is it verified that security requirements are still met after the change?",
            "gap_description": "Implementing changes without a prior security impact analysis can inadvertently disable security controls, introduce new vulnerabilities, or cause operational outages."
        },
        {
            "id": "03.04.05",
            "order": 31,
            "family": "Configuration Management",
            "title": "Access Restrictions for Change",
            "assessment_question": "Are physical and logical access restrictions associated with changes to the system defined, documented, approved, and enforced?",
            "gap_description": "Without restricting who can make changes to a system, unauthorized individuals can introduce malicious code, misconfigurations, or other vulnerabilities."
        },
        {
            "id": "03.04.06",
            "order": 32,
            "family": "Configuration Management",
            "title": "Least Functionality",
            "assessment_question": "Is the system configured to provide only mission-essential capabilities, with non-essential functions, ports, protocols, and services being prohibited, restricted, reviewed, and disabled?",
            "gap_description": "Running unnecessary functions, ports, and services significantly increases the system's attack surface, providing more potential avenues for an attacker to exploit."
        },
        {
            "id": "03.04.08",
            "order": 33,
            "family": "Configuration Management",
            "title": "Authorized Software - Allow by Exception",
            "assessment_question": "Does the organization identify authorized software, implement a deny-all/allow-by-exception policy for its execution, and review the authorized software list periodically?",
            "gap_description": "Without an application whitelisting (allow-by-exception) policy, users can run unauthorized or malicious software, which is a primary vector for malware infections and system compromise."
        },
        {
            "id": "03.04.10",
            "order": 34,
            "family": "Configuration Management",
            "title": "System Component Inventory",
            "assessment_question": "Does the organization develop, document, review, and update an inventory of system components?",
            "gap_description": "An inaccurate or incomplete system inventory means the organization cannot effectively protect what it does not know it has, leading to unpatched and unmonitored assets."
        },
        {
            "id": "03.04.11",
            "order": 35,
            "family": "Configuration Management",
            "title": "Information Location",
            "assessment_question": "Does the organization identify, document, and update the location of CUI and the system components where it is processed and stored?",
            "gap_description": "Not knowing the specific location of CUI makes it impossible to ensure that appropriate security controls are applied, leaving sensitive data unprotected and at high risk of a breach."
        },
        {
            "id": "03.04.12",
            "order": 36,
            "family": "Configuration Management",
            "title": "System and Component Configuration for High-Risk Areas",
            "assessment_question": "Are systems issued with specific configurations for individuals traveling to high-risk locations, and are specific security requirements applied when they return?",
            "gap_description": "Using standard-configuration devices in high-risk locations makes them highly susceptible to compromise through physical tampering or sophisticated cyber attacks."
        },
        {
            "id": "03.05.01",
            "order": 37,
            "family": "Identification and Authentication",
            "title": "User Identification and Authentication",
            "assessment_question": "Are system users uniquely identified and authenticated, with that identity associated with their processes, and are they re-authenticated under defined circumstances?",
            "gap_description": "Without unique user identification and authentication, accountability is lost, and unauthorized individuals can gain access by impersonating legitimate users."
        },
        {
            "id": "03.05.02",
            "order": 38,
            "family": "Identification and Authentication",
            "title": "Device Identification and Authentication",
            "assessment_question": "Are defined devices or types of devices uniquely identified and authenticated before a system connection is established?",
            "gap_description": "Failure to authenticate devices allows unauthorized or rogue devices to connect to the network, which can be used to launch attacks or intercept CUI."
        },
        {
            "id": "03.05.03",
            "order": 39,
            "family": "Identification and Authentication",
            "title": "Multi-Factor Authentication",
            "assessment_question": "Is multi-factor authentication implemented for access to both privileged and non-privileged accounts?",
            "gap_description": "Relying solely on single-factor authentication (passwords) makes accounts highly vulnerable to compromise via phishing, credential stuffing, or brute-force attacks."
        },
        {
            "id": "03.05.04",
            "order": 40,
            "family": "Identification and Authentication",
            "title": "Replay-Resistant Authentication",
            "assessment_question": "Are replay-resistant authentication mechanisms implemented for access to privileged and non-privileged accounts?",
            "gap_description": "Using an authentication mechanism that is not replay-resistant allows an attacker to capture and reuse authentication traffic to gain unauthorized access."
        },
        {
            "id": "03.05.05",
            "order": 41,
            "family": "Identification and Authentication",
            "title": "Identifier Management",
            "assessment_question": "Does the organization receive authorization to assign identifiers, prevent their reuse for a defined period, and manage them by uniquely identifying individual status?",
            "gap_description": "Poor identifier management, especially the rapid reuse of identifiers, can lead to the misattribution of actions, complicating audits and accountability."
        },
        {
            "id": "03.05.07",
            "order": 42,
            "family": "Identification and Authentication",
            "title": "Password Management",
            "assessment_question": "Does the organization maintain a list of compromised passwords, verify new passwords against this list, transmit and store passwords in a protected form, require a new password after recovery, and enforce composition and complexity rules?",
            "gap_description": "Weak password management practices result in easily guessable or compromised passwords, which remains one of the most common vectors for unauthorized system access."
        },
        {
            "id": "03.05.11",
            "order": 43,
            "family": "Identification and Authentication",
            "title": "Authentication Feedback",
            "assessment_question": "Is feedback of authentication information obscured during the authentication process?",
            "gap_description": "Providing specific feedback during a failed logon (e.g., 'Invalid username' vs. 'Invalid password') can allow an attacker to enumerate valid user accounts on the system."
        },
        {
            "id": "03.05.12",
            "order": 44,
            "family": "Identification and Authentication",
            "title": "Authenticator Management",
            "assessment_question": "Does the organization manage authenticators by verifying identity during distribution, establishing initial content, implementing procedures for lost/compromised authenticators, changing defaults, changing/refreshing them periodically, and protecting their content?",
            "gap_description": "Insecure management of authenticators (e.g., shipping tokens with default PINs, not revoking lost tokens) can lead directly to their compromise and unauthorized use."
        },
        {
            "id": "03.06.01",
            "order": 45,
            "family": "Incident Response",
            "title": "Incident Handling",
            "assessment_question": "Does the organization implement an incident-handling capability consistent with its incident response plan, including preparation, detection, analysis, containment, eradication, and recovery?",
            "gap_description": "Without a structured incident handling process, the response to a security breach will be chaotic and ineffective, leading to greater damage, longer downtime, and higher recovery costs."
        },
        {
            "id": "03.06.02",
            "order": 46,
            "family": "Incident Response",
            "title": "Incident Monitoring, Reporting, and Response Assistance",
            "assessment_question": "Does the organization track and document security incidents, report them within a defined time period, report information to defined authorities, and provide an incident response support resource?",
            "gap_description": "Failure to formally track, document, and report incidents prevents the organization from learning from past events and makes it impossible to coordinate an effective, enterprise-wide response."
        },
        {
            "id": "03.06.03",
            "order": 47,
            "family": "Incident Response",
            "title": "Incident Response Testing",
            "assessment_question": "Is the effectiveness of the incident response capability tested at a defined frequency?",
            "gap_description": "An untested incident response plan is likely to fail during a real-world event due to unidentified flaws, leading to a disorganized and ineffective response when it is needed most."
        },
        {
            "id": "03.06.04",
            "order": 48,
            "family": "Incident Response",
            "title": "Incident Response Training",
            "assessment_question": "Does the organization provide incident response training to users consistent with their roles and responsibilities within a defined time period and update the training content periodically?",
            "gap_description": "Untrained personnel will not know how to correctly identify, report, or react to an incident, potentially leading to actions that could worsen the breach or destroy forensic evidence."
        },
        {
            "id": "03.06.05",
            "order": 49,
            "family": "Incident Response",
            "title": "Incident Response Plan",
            "assessment_question": "Does the organization develop, distribute, update, and protect an incident response plan that defines reportable incidents, information sharing, and responsibilities?",
            "gap_description": "The absence of a formal incident response plan guarantees an ad-hoc and uncoordinated response to security incidents, significantly increasing their potential impact and recovery time."
        },
        {
            "id": "03.07.04",
            "order": 50,
            "family": "Maintenance",
            "title": "Maintenance Tools",
            "assessment_question": "Are system maintenance tools approved, controlled, and monitored; checked for malicious code before use; and is removal of equipment containing CUI prevented?",
            "gap_description": "Uncontrolled maintenance tools, both hardware and software, can be used to introduce malware into the system or exfiltrate data if the tools are compromised or not properly sanitized."
        },
        {
            "id": "03.07.05",
            "order": 51,
            "family": "Maintenance",
            "title": "Nonlocal Maintenance",
            "assessment_question": "Are nonlocal maintenance activities approved and monitored, with multi-factor and replay-resistant authentication used, and sessions terminated upon completion?",
            "gap_description": "Unsecured nonlocal (remote) maintenance sessions are a prime target for attackers, who can hijack them to gain privileged, administrative access to the system."
        },
        {
            "id": "03.07.06",
            "order": 52,
            "family": "Maintenance",
            "title": "Maintenance Personnel",
            "assessment_question": "Does the organization establish a process for authorizing maintenance personnel, maintain a list of authorized personnel, and ensure non-escorted personnel have required access authorizations or are supervised?",
            "gap_description": "Allowing unauthorized or unsupervised individuals to perform system maintenance creates a significant risk of intentional or accidental damage, misconfiguration, or data theft."
        },
        {
            "id": "03.08.01",
            "order": 53,
            "family": "Media Protection",
            "title": "Media Storage",
            "assessment_question": "Is system media containing CUI physically controlled and securely stored?",
            "gap_description": "System media containing CUI that is not physically controlled and securely stored can be easily lost, stolen, or accessed by unauthorized individuals."
        },
        {
            "id": "03.08.02",
            "order": 54,
            "family": "Media Protection",
            "title": "Media Access",
            "assessment_question": "Is access to CUI on system media restricted to authorized personnel or roles?",
            "gap_description": "Unrestricted access to system media allows any individual to view, copy, or steal the CUI stored on it, leading to a straightforward data breach."
        },
        {
            "id": "03.08.03",
            "order": 55,
            "family": "Media Protection",
            "title": "Media Sanitization",
            "assessment_question": "Is system media containing CUI sanitized prior to disposal, release out of organizational control, or release for reuse?",
            "gap_description": "Failure to properly sanitize media before disposal or reuse can lead to the recovery of sensitive CUI by unauthorized individuals, a practice often referred to as 'dumpster diving'."
        },
        {
            "id": "03.08.04",
            "order": 56,
            "family": "Media Protection",
            "title": "Media Marking",
            "assessment_question": "Is system media containing CUI marked to indicate distribution limitations, handling caveats, and applicable CUI markings?",
            "gap_description": "Unmarked media provides no visual cues for proper handling, which can lead to CUI being stored in unsecured locations, sent to unauthorized recipients, or disposed of improperly."
        },
        {
            "id": "03.08.05",
            "order": 57,
            "family": "Media Protection",
            "title": "Media Transport",
            "assessment_question": "Is system media containing CUI protected, controlled, and accounted for during transport outside of controlled areas, and are transport activities documented?",
            "gap_description": "Unprotected and untracked media in transport is highly vulnerable to loss or theft, which would result in a breach of all the CUI contained on that media."
        },
        {
            "id": "03.08.07",
            "order": 58,
            "family": "Media Protection",
            "title": "Media Use",
            "assessment_question": "Is the use of defined types of system media restricted or prohibited, and is the use of removable media without an identifiable owner prohibited?",
            "gap_description": "The unrestricted use of removable media (e.g., USB drives) is a major vector for both malware introduction into the network and unauthorized exfiltration of CUI."
        },
        {
            "id": "03.08.09",
            "order": 59,
            "family": "Media Protection",
            "title": "System Backup - Cryptographic Protection",
            "assessment_question": "Is the confidentiality of backup CUI protected using cryptographic mechanisms at backup storage locations?",
            "gap_description": "Backups are a concentrated repository of sensitive data. If they are not encrypted, their theft or loss would result in a catastrophic breach of all the CUI they contain."
        },
        {
            "id": "03.09.01",
            "order": 60,
            "family": "Personnel Security",
            "title": "Personnel Screening",
            "assessment_question": "Are individuals screened prior to being authorized access to the system, and are they rescreened under defined conditions?",
            "gap_description": "Failure to screen individuals before granting them access to CUI creates the risk of hiring a malicious insider or an individual susceptible to coercion."
        },
        {
            "id": "03.09.02",
            "order": 61,
            "family": "Personnel Security",
            "title": "Personnel Termination and Transfer",
            "assessment_question": "When an individual's employment is terminated or they are transferred, are system access, authenticators, and security-related property handled according to defined procedures?",
            "gap_description": "Not promptly and completely revoking all access for terminated employees leaves an open door for a disgruntled individual to cause damage or steal data."
        },
        {
            "id": "03.10.01",
            "order": 62,
            "family": "Physical Protection",
            "title": "Physical Access Authorizations",
            "assessment_question": "Does the organization develop, maintain, and review a list of individuals with authorized physical access to the facility, issue authorization credentials, and remove individuals when access is no longer required?",
            "gap_description": "Without a formal process for managing physical access authorizations, unauthorized individuals may be able to gain entry to facilities where they can access, damage, or steal systems and CUI."
        },
        {
            "id": "03.10.02",
            "order": 63,
            "family": "Physical Protection",
            "title": "Monitoring Physical Access",
            "assessment_question": "Is physical access to the facility monitored to detect and respond to security incidents, and are physical access logs reviewed periodically?",
            "gap_description": "A lack of physical access monitoring means a physical breach could go completely undetected, allowing an intruder ample time to compromise systems or steal sensitive information."
        },
        {
            "id": "03.10.06",
            "order": 64,
            "family": "Physical Protection",
            "title": "Alternate Work Site",
            "assessment_question": "Does the organization determine allowed alternate work sites and employ defined security requirements at those sites?",
            "gap_description": "Unsecured alternate work sites, such as employee homes or public Wi-Fi, expose CUI to a wide range of threats that are not present in a controlled corporate environment."
        },
        {
            "id": "03.10.07",
            "order": 65,
            "family": "Physical Protection",
            "title": "Physical Access Control",
            "assessment_question": "Is physical access enforced at entry/exit points, with audit logs maintained, visitors escorted, access devices secured, and access to output devices controlled?",
            "gap_description": "Failure to enforce physical access controls allows unauthorized individuals to tailgate or otherwise enter secure areas, where they can potentially access systems, steal devices, or view sensitive information."
        },
        {
            "id": "03.10.08",
            "order": 66,
            "family": "Physical Protection",
            "title": "Access Control for Transmission",
            "assessment_question": "Is physical access to system distribution and transmission lines controlled within organizational facilities?",
            "gap_description": "Unprotected network cables, wiring closets, and switch ports can be physically tapped, allowing an attacker to intercept all unencrypted network traffic or disrupt communications."
        },
        {
            "id": "03.11.01",
            "order": 67,
            "family": "Risk Assessment",
            "title": "Risk Assessment",
            "assessment_question": "Does the organization assess the risk (including supply chain risk) of unauthorized disclosure from processing, storing, or transmitting CUI, and update the assessment periodically?",
            "gap_description": "Without conducting regular risk assessments, an organization remains unaware of its most significant threats and vulnerabilities, leading to a misallocation of security resources and an ineffective security posture."
        },
        {
            "id": "03.11.02",
            "order": 68,
            "family": "Risk Assessment",
            "title": "Vulnerability Monitoring and Scanning",
            "assessment_question": "Does the organization monitor and scan the system for vulnerabilities at a defined frequency, remediate them within defined response times, and update the list of vulnerabilities to be scanned?",
            "gap_description": "Failure to consistently scan for and remediate vulnerabilities leaves systems exposed to well-known exploits that can be easily automated and used by attackers to compromise the network."
        },
        {
            "id": "03.11.04",
            "order": 69,
            "family": "Risk Assessment",
            "title": "Risk Response",
            "assessment_question": "Does the organization respond to findings from security assessments, monitoring, and audits?",
            "gap_description": "Not responding to identified risks means that known security weaknesses are left unaddressed, creating a state of continuous and avoidable vulnerability."
        },
        {
            "id": "03.12.01",
            "order": 70,
            "family": "Security Assessment and Monitoring",
            "title": "Security Assessment",
            "assessment_question": "Are the security requirements for the system and its environment of operation assessed at a defined frequency to determine if they have been satisfied?",
            "gap_description": "Without periodic security assessments, an organization cannot be sure that its security controls are implemented correctly or remain effective over time, which can lead to a false sense of security."
        },
        {
            "id": "03.12.02",
            "order": 71,
            "family": "Security Assessment and Monitoring",
            "title": "Plan of Action and Milestones",
            "assessment_question": "Does the organization develop and update a plan of action and milestones (POAM) to document planned remediation actions for system weaknesses?",
            "gap_description": "The absence of a formal POAM process means that identified security deficiencies are not tracked, prioritized, or systematically remediated, allowing critical vulnerabilities to persist indefinitely."
        },
        {
            "id": "03.12.03",
            "order": 72,
            "family": "Security Assessment and Monitoring",
            "title": "Continuous Monitoring",
            "assessment_question": "Does the organization develop and implement a system-level continuous monitoring strategy that includes ongoing monitoring and security assessments?",
            "gap_description": "A lack of continuous monitoring results in a static, point-in-time security posture that fails to detect system changes, new threats, and emerging vulnerabilities in a timely manner."
        },
        {
            "id": "03.12.05",
            "order": 73,
            "family": "Security Assessment and Monitoring",
            "title": "Information Exchange",
            "assessment_question": "Does the organization approve, manage, document, and review agreements for the exchange of CUI between systems, including interface characteristics and security requirements?",
            "gap_description": "Exchanging CUI without formal agreements creates ambiguity over security responsibilities and can lead to data breaches if a partner organization has weaker or incompatible security controls."
        },
        {
            "id": "03.13.01",
            "order": 74,
            "family": "System and Communications Protection",
            "title": "Boundary Protection",
            "assessment_question": "Does the organization monitor and control communications at external and key internal interfaces, implement subnetworks for publicly accessible components, and connect to external systems only through managed interfaces?",
            "gap_description": "A weak or nonexistent network boundary allows unfiltered, potentially malicious traffic to enter the internal network, making it much easier for attackers to reach and compromise sensitive systems."
        },
        {
            "id": "03.13.04",
            "order": 75,
            "family": "System and Communications Protection",
            "title": "Information in Shared System Resources",
            "assessment_question": "Is the system prevented from causing unauthorized and unintended information transfer via shared system resources?",
            "gap_description": "Failure to clear shared system resources like memory or cache after use can lead to object reuse vulnerabilities, where residual data from one user becomes accessible to a subsequent user."
        },
        {
            "id": "03.13.06",
            "order": 76,
            "family": "System and Communications Protection",
            "title": "Network Communications - Deny by Default - Allow by Exception",
            "assessment_question": "Does the organization deny network communications traffic by default and allow network communications traffic by exception?",
            "gap_description": "An 'allow-by-default' network policy leaves all unneeded ports and services open, dramatically increasing the network's attack surface and providing numerous potential entry points for an attacker."
        },
        {
            "id": "03.13.08",
            "order": 77,
            "family": "System and Communications Protection",
            "title": "Transmission and Storage Confidentiality",
            "assessment_question": "Are cryptographic mechanisms implemented to prevent the unauthorized disclosure of CUI during transmission and while in storage?",
            "gap_description": "Storing or transmitting CUI in unencrypted, plaintext format makes it trivial for an attacker to read and steal the information if they can intercept the traffic or access the storage device."
        },
        {
            "id": "03.13.09",
            "order": 78,
            "family": "System and Communications Protection",
            "title": "Network Disconnect",
            "assessment_question": "Is the network connection associated with a communications session terminated at the end of the session or after a defined period of inactivity?",
            "gap_description": "Leaving inactive network sessions open for extended periods increases the window of opportunity for an attacker to hijack the session and gain unauthorized access to the system."
        },
        {
            "id": "03.13.10",
            "order": 79,
            "family": "System and Communications Protection",
            "title": "Cryptographic Key Establishment and Management",
            "assessment_question": "Are cryptographic keys established and managed in the system in accordance with defined requirements for key generation, distribution, storage, access, and destruction?",
            "gap_description": "Poor cryptographic key management practices can lead to the compromise of the keys themselves, which would render all encrypted data completely vulnerable to decryption by an attacker."
        },
        {
            "id": "03.13.11",
            "order": 80,
            "family": "System and Communications Protection",
            "title": "Cryptographic Protection",
            "assessment_question": "Are organization-defined types of FIPS-validated cryptography implemented to protect the confidentiality of CUI?",
            "gap_description": "Using weak, outdated, or non-validated cryptographic algorithms provides a false sense of security, as the protection they offer can often be broken with relative ease by a determined adversary."
        },
        {
            "id": "03.13.12",
            "order": 81,
            "family": "System and Communications Protection",
            "title": "Collaborative Computing Devices and Applications",
            "assessment_question": "Is the remote activation of collaborative computing devices prohibited (with defined exceptions), and is an explicit indication of use provided to users physically present?",
            "gap_description": "The potential for an attacker to remotely and silently activate microphones or cameras on computing devices presents a severe risk of eavesdropping and the disclosure of sensitive conversations and CUI."
        },
        {
            "id": "03.13.13",
            "order": 82,
            "family": "System and Communications Protection",
            "title": "Mobile Code",
            "assessment_question": "Does the organization define, authorize, monitor, and control the use of acceptable mobile code and mobile code technologies?",
            "gap_description": "The uncontrolled use of mobile code, such as JavaScript or applets from untrusted websites, can lead to the execution of malicious code within a user's browser, resulting in system compromise."
        },
        {
            "id": "03.13.15",
            "order": 83,
            "family": "System and Communications Protection",
            "title": "Session Authenticity",
            "assessment_question": "Is the authenticity of communications sessions protected?",
            "gap_description": "Failure to protect session authenticity leaves communications vulnerable to session hijacking and adversary-in-the-middle attacks, allowing an attacker to impersonate a legitimate user or inject malicious data."
        },
        {
            "id": "03.14.01",
            "order": 84,
            "family": "System and Information Integrity",
            "title": "Flaw Remediation",
            "assessment_question": "Does the organization identify, report, and correct system flaws, and install security-relevant software and firmware updates within a defined time period?",
            "gap_description": "Not promptly identifying and remediating system flaws leaves known, publicly disclosed vulnerabilities unpatched, which are the primary targets for automated and widespread attacks."
        },
        {
            "id": "03.14.02",
            "order": 85,
            "family": "System and Information Integrity",
            "title": "Malicious Code Protection",
            "assessment_question": "Are malicious code protection mechanisms implemented at system entry/exit points, updated as new releases are available, and configured to perform periodic and real-time scans?",
            "gap_description": "Without effective and up-to-date malicious code protection, systems are highly susceptible to infection from viruses, ransomware, and spyware, leading to data theft, system damage, and operational disruption."
        },
        {
            "id": "03.14.03",
            "order": 86,
            "family": "System and Information Integrity",
            "title": "Security Alerts, Advisories, and Directives",
            "assessment_question": "Does the organization receive system security alerts from external organizations and generate internal alerts as necessary?",
            "gap_description": "Ignoring external security alerts and advisories means the organization is not staying informed about new threats, vulnerabilities, and attack techniques, preventing it from taking proactive defensive measures."
        },
        {
            "id": "03.14.06",
            "order": 87,
            "family": "System and Information Integrity",
            "title": "System Monitoring",
            "assessment_question": "Does the organization monitor the system to detect attacks, unauthorized connections, unauthorized use, and unusual inbound/outbound communications traffic?",
            "gap_description": "Without comprehensive system monitoring, an organization will likely remain unaware of an ongoing attack, malicious insider activity, or unauthorized use of its systems until significant damage has already occurred."
        },
        {
            "id": "03.14.08",
            "order": 88,
            "family": "System and Information Integrity",
            "title": "Information Management and Retention",
            "assessment_question": "Is CUI managed and retained within the system and in system output in accordance with applicable laws, regulations, and operational requirements?",
            "gap_description": "Failure to manage and retain CUI according to defined policies can result in compliance violations and increases risk by leaving sensitive data exposed on systems longer than necessary."
        },
        {
            "id": "03.15.01",
            "order": 89,
            "family": "Planning",
            "title": "Policy and Procedures",
            "assessment_question": "Has the organization developed, documented, disseminated, reviewed, and updated the policies and procedures needed to satisfy the security requirements for protecting CUI?",
            "gap_description": "Without formally documented and disseminated policies and procedures, security efforts are inconsistent, and personnel lack clear guidance, leading to an ad-hoc and ineffective security program."
        },
        {
            "id": "03.15.02",
            "order": 90,
            "family": "Planning",
            "title": "System Security Plan",
            "assessment_question": "Has the organization developed, reviewed, updated, and protected a system security plan that describes the system components, information types, threats, operational environment, security requirements, and safeguards?",
            "gap_description": "The absence of a System Security Plan (SSP) indicates a lack of a systematic approach to security, making it impossible to ensure that all requirements are properly implemented and all risks are managed."
        },
        {
            "id": "03.15.03",
            "order": 91,
            "family": "Planning",
            "title": "Rules of Behavior",
            "assessment_question": "Has the organization established, reviewed, and updated rules of behavior for system usage and CUI protection, provided them to individuals, and received documented acknowledgement before authorizing access?",
            "gap_description": "Without established Rules of Behavior that users must acknowledge, there is no formal agreement on the acceptable and secure use of systems, making it difficult to enforce policies and hold users accountable."
        },
        {
            "id": "03.16.01",
            "order": 92,
            "family": "System and Services Acquisition",
            "title": "Security Engineering Principles",
            "assessment_question": "Are defined systems security engineering principles applied to the development or modification of the system and its components?",
            "gap_description": "Developing systems without applying security engineering principles often results in products that are insecure by design, with fundamental vulnerabilities built into their core architecture."
        },
        {
            "id": "03.16.02",
            "order": 93,
            "family": "System and Services Acquisition",
            "title": "Unsupported System Components",
            "assessment_question": "Are system components replaced when support is no longer available, or are options for risk mitigation or alternative support provided for components that cannot be replaced?",
            "gap_description": "Using system components that are no longer supported by the vendor means they no longer receive security patches, leaving them with permanent, unfixable vulnerabilities that can be easily exploited."
        },
        {
            "id": "03.16.03",
            "order": 94,
            "family": "System and Services Acquisition",
            "title": "External System Services",
            "assessment_question": "Does the organization require providers of external system services to comply with defined security requirements, define user roles and responsibilities, and monitor compliance by external providers?",
            "gap_description": "Using external or cloud services without enforcing security requirements on the provider exposes CUI to the vulnerabilities of a third party, creating a significant and often unmanaged supply chain risk."
        },
        {
            "id": "03.17.01",
            "order": 95,
            "family": "Supply Chain Risk Management",
            "title": "Supply Chain Risk Management Plan",
            "assessment_question": "Has the organization developed, reviewed, updated, and protected a plan for managing supply chain risks associated with the system lifecycle?",
            "gap_description": "The absence of a supply chain risk management plan means the organization is not proactively identifying or mitigating risks from its suppliers, leaving it vulnerable to counterfeit products or third-party breaches."
        },
        {
            "id": "03.17.02",
            "order": 96,
            "family": "Supply Chain Risk Management",
            "title": "Acquisition Strategies, Tools, and Methods",
            "assessment_question": "Are acquisition strategies, contract tools, and procurement methods developed and implemented to identify, protect against, and mitigate supply chain risks?",
            "gap_description": "Not employing secure acquisition practices allows for the introduction of tampered, counterfeit, or otherwise untrustworthy hardware and software into the environment, creating a significant security risk."
        },
        {
            "id": "03.17.03",
            "order": 97,
            "family": "Supply Chain Risk Management",
            "title": "Supply Chain Requirements and Processes",
            "assessment_question": "Has the organization established a process for identifying and addressing weaknesses in the supply chain and enforced security requirements to protect against supply chain risks?",
            "gap_description": "Failure to identify and address security weaknesses in the supply chain leaves the organization vulnerable to disruptions and compromises originating from its suppliers, vendors, and partners."
        }
    ]
});
