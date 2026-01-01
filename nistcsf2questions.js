loadNISTCSF2Framework({
    name: "NIST CSF 2.0",
    description: "Based on NIST Cyber Security Framework 2.0",
    questions: [
        {
            "id": "GV.OC-01",
            "order": 1,
            "family": "Govern - Organizational Context",
            "title": "Mission-Informed Risk Management",
            "assessment_question": "Is the organizational mission understood and does it inform cybersecurity risk management?",
            "gap_description": "Without a clear understanding of the organizational mission, cybersecurity efforts can be misaligned with business objectives, leading to ineffective risk management and wasted resources."
        },
        {
            "id": "GV.OC-02",
            "order": 2,
            "family": "Govern - Organizational Context",
            "title": "Stakeholder Needs and Expectations",
            "assessment_question": "Are internal and external stakeholders and their cybersecurity needs and expectations understood and considered?",
            "gap_description": "Failure to understand stakeholder expectations can result in a cybersecurity program that does not meet business, customer, or partner requirements, potentially damaging reputation and relationships."
        },
        {
            "id": "GV.OC-03",
            "order": 3,
            "family": "Govern - Organizational Context",
            "title": "Legal and Regulatory Requirements",
            "assessment_question": "Are legal, regulatory, and contractual requirements regarding cybersecurity, privacy, and civil liberties understood and managed?",
            "gap_description": "Ignorance of legal and regulatory obligations can lead to non-compliance, resulting in significant fines, legal action, and loss of trust."
        },
        {
            "id": "GV.OC-04",
            "order": 4,
            "family": "Govern - Organizational Context",
            "title": "External Dependencies",
            "assessment_question": "Are critical objectives, capabilities, and services that external stakeholders depend on understood and communicated?",
            "gap_description": "A lack of understanding of external dependencies can cause service disruptions for partners and customers, leading to contractual penalties and reputational damage."
        },
        {
            "id": "GV.OC-05",
            "order": 5,
            "family": "Govern - Organizational Context",
            "title": "Internal Dependencies",
            "assessment_question": "Are the outcomes, capabilities, and services that the organization depends on understood and communicated?",
            "gap_description": "Failure to identify and manage internal dependencies means that a failure in one unmonitored area can cascade and disrupt critical business functions."
        },
        {
            "id": "GV.RM-01",
            "order": 6,
            "family": "Govern - Risk Management Strategy",
            "title": "Stakeholder-Agreed Objectives",
            "assessment_question": "Are risk management objectives established and agreed to by organizational stakeholders?",
            "gap_description": "Without agreed-upon objectives, different parts of the organization may work towards conflicting goals, resulting in an incoherent and ineffective risk management strategy."
        },
        {
            "id": "GV.RM-02",
            "order": 7,
            "family": "Govern - Risk Management Strategy",
            "title": "Risk Appetite and Tolerance",
            "assessment_question": "Are risk appetite and risk tolerance statements established, communicated, and maintained?",
            "gap_description": "Without a clearly defined risk appetite, the organization cannot make consistent, informed decisions about which risks to accept, mitigate, or avoid, leading to either excessive risk-taking or missed opportunities."
        },
        {
            "id": "GV.RM-03",
            "order": 8,
            "family": "Govern - Risk Management Strategy",
            "title": "Integration with Enterprise Risk Management",
            "assessment_question": "Are cybersecurity risk management activities and outcomes included in enterprise risk management (ERM) processes?",
            "gap_description": "Isolating cybersecurity risk from ERM prevents a holistic view of organizational risk, leading to poor strategic decisions and resource allocation."
        },
        {
            "id": "GV.RM-04",
            "order": 9,
            "family": "Govern - Risk Management Strategy",
            "title": "Strategic Risk Response Direction",
            "assessment_question": "Is a strategic direction that describes appropriate risk response options established and communicated?",
            "gap_description": "A lack of strategic direction for risk response leads to inconsistent, ad-hoc, and potentially ineffective actions when risks are identified."
        },
        {
            "id": "GV.RM-05",
            "order": 10,
            "family": "Govern - Risk Management Strategy",
            "title": "Risk Communication Channels",
            "assessment_question": "Are lines of communication across the organization established for cybersecurity risks, including those from suppliers?",
            "gap_description": "Poor communication channels for risk mean that critical information may not reach the right decision-makers in a timely manner, hindering effective risk management."
        },
        {
            "id": "GV.RM-06",
            "order": 11,
            "family": "Govern - Risk Management Strategy",
            "title": "Standardized Risk Calculation",
            "assessment_question": "Is a standardized method for calculating, documenting, categorizing, and prioritizing cybersecurity risks established and communicated?",
            "gap_description": "Without a standardized method, risk assessments are inconsistent and subjective, making it impossible to compare risks across the organization and prioritize them effectively."
        },
        {
            "id": "GV.RM-07",
            "order": 12,
            "family": "Govern - Risk Management Strategy",
            "title": "Strategic Opportunities (Positive Risks)",
            "assessment_question": "Are strategic opportunities (i.e., positive risks) characterized and included in organizational cybersecurity risk discussions?",
            "gap_description": "Focusing only on negative risks means the organization may miss opportunities where cybersecurity investments could enable business innovation and competitive advantage."
        },
        {
            "id": "GV.RR-01",
            "order": 13,
            "family": "Govern - Roles, Responsibilities, and Authorities",
            "title": "Leadership Accountability and Culture",
            "assessment_question": "Is organizational leadership responsible and accountable for cybersecurity risk, and do they foster a risk-aware, ethical, and continually improving culture?",
            "gap_description": "Without leadership accountability, cybersecurity is not prioritized, and a culture of security awareness fails to develop, leaving the organization vulnerable."
        },
        {
            "id": "GV.RR-02",
            "order": 14,
            "family": "Govern - Roles, Responsibilities, and Authorities",
            "title": "Defined Roles and Responsibilities",
            "assessment_question": "Are roles, responsibilities, and authorities related to cybersecurity risk management established, communicated, understood, and enforced?",
            "gap_description": "Unclear roles and responsibilities lead to confusion, gaps in coverage, and a lack of accountability for critical cybersecurity tasks."
        },
        {
            "id": "GV.RR-03",
            "order": 15,
            "family": "Govern - Roles, Responsibilities, and Authorities",
            "title": "Adequate Resource Allocation",
            "assessment_question": "Are adequate resources allocated commensurate with the cybersecurity risk strategy, roles, responsibilities, and policies?",
            "gap_description": "Inadequate resourcing undermines the entire cybersecurity program, making it impossible to effectively implement controls and manage risk."
        },
        {
            "id": "GV.RR-04",
            "order": 16,
            "family": "Govern - Roles, Responsibilities, and Authorities",
            "title": "Cybersecurity in Human Resources",
            "assessment_question": "Is cybersecurity included in human resources practices (e.g., hiring, onboarding, termination)?",
            "gap_description": "Failure to integrate cybersecurity into HR practices can lead to insider threats, unauthorized access, and a workforce that is unprepared to handle security responsibilities."
        },
        {
            "id": "GV.PO-01",
            "order": 17,
            "family": "Govern - Policy",
            "title": "Established Cybersecurity Policy",
            "assessment_question": "Is a policy for managing cybersecurity risks established, communicated, and enforced based on context, strategy, and priorities?",
            "gap_description": "Without a formal policy, cybersecurity efforts are ad-hoc and inconsistent, and there is no clear standard for expected behavior or configurations."
        },
        {
            "id": "GV.PO-02",
            "order": 18,
            "family": "Govern - Policy",
            "title": "Policy Review and Update",
            "assessment_question": "Is the cybersecurity policy reviewed, updated, communicated, and enforced to reflect changes in requirements, threats, and technology?",
            "gap_description": "An outdated policy is irrelevant and ineffective, leaving the organization unprotected against new threats and non-compliant with new requirements."
        },
        {
            "id": "GV.OV-01",
            "order": 19,
            "family": "Govern - Oversight",
            "title": "Strategy Review and Adjustment",
            "assessment_question": "Are the outcomes of the cybersecurity risk management strategy reviewed to inform and adjust the strategy and direction?",
            "gap_description": "Without oversight and review, the cybersecurity strategy may not adapt to changing business goals or a new threat landscape, becoming progressively less effective over time."
        },
        {
            "id": "GV.OV-02",
            "order": 20,
            "family": "Govern - Oversight",
            "title": "Strategy Coverage Review",
            "assessment_question": "Is the cybersecurity risk management strategy reviewed and adjusted to ensure it covers organizational requirements and risks?",
            "gap_description": "Failure to review the strategy for complete coverage can leave critical assets or new business initiatives unprotected."
        },
        {
            "id": "GV.OV-03",
            "order": 21,
            "family": "Govern - Oversight",
            "title": "Performance Evaluation",
            "assessment_question": "Is organizational cybersecurity risk management performance evaluated and reviewed for necessary adjustments?",
            "gap_description": "Without performance evaluation, the organization cannot determine if its cybersecurity investments are effective or identify areas for improvement."
        },
        {
            "id": "GV.SC-01",
            "order": 22,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "C-SCRM Program Establishment",
            "assessment_question": "Is a cybersecurity supply chain risk management (C-SCRM) program, strategy, and policy established and agreed to by stakeholders?",
            "gap_description": "Without a formal C-SCRM program, the organization is blind to significant risks introduced by its suppliers, partners, and service providers."
        },
        {
            "id": "GV.SC-02",
            "order": 23,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "Supplier Roles and Responsibilities",
            "assessment_question": "Are cybersecurity roles and responsibilities for suppliers, customers, and partners established, communicated, and coordinated?",
            "gap_description": "Ambiguity in supplier responsibilities leads to security gaps where both the organization and the supplier assume the other party is responsible for a control."
        },
        {
            "id": "GV.SC-03",
            "order": 24,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "C-SCRM Integration with ERM",
            "assessment_question": "Is C-SCRM integrated into cybersecurity and enterprise risk management, risk assessment, and improvement processes?",
            "gap_description": "Treating supply chain risk in isolation from overall enterprise risk leads to a fragmented and incomplete understanding of the organization's total risk exposure."
        },
        {
            "id": "GV.SC-04",
            "order": 25,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "Supplier Criticality Prioritization",
            "assessment_question": "Are suppliers known and prioritized by criticality?",
            "gap_description": "Failure to prioritize suppliers means security efforts are not focused on the most critical third parties, potentially leaving high-risk relationships unmanaged."
        },
        {
            "id": "GV.SC-05",
            "order": 26,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "Supplier Contractual Requirements",
            "assessment_question": "Are cybersecurity requirements for the supply chain established, prioritized, and integrated into contracts and agreements?",
            "gap_description": "Without clear contractual requirements, there is no legal or formal basis to hold suppliers accountable for meeting security standards."
        },
        {
            "id": "GV.SC-06",
            "order": 27,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "Supplier Due Diligence",
            "assessment_question": "Is planning and due diligence performed to reduce risks before entering into formal supplier or other third-party relationships?",
            "gap_description": "Skipping due diligence can lock the organization into a relationship with a high-risk supplier, making it difficult and costly to manage that risk later."
        },
        {
            "id": "GV.SC-07",
            "order": 28,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "Supplier Risk Monitoring",
            "assessment_question": "Are the risks posed by a supplier, their products, and services monitored over the course of the relationship?",
            "gap_description": "A supplier's security posture can change over time. Failure to monitor them continuously can leave the organization exposed to newly emerged risks."
        },
        {
            "id": "GV.SC-08",
            "order": 29,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "Supplier Incident Coordination",
            "assessment_question": "Are relevant suppliers and other third parties included in incident planning, response, and recovery activities?",
            "gap_description": "Excluding suppliers from incident response planning leads to a chaotic and slow response when a supply chain incident occurs."
        },
        {
            "id": "GV.SC-09",
            "order": 30,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "Supply Chain Security Practice Integration",
            "assessment_question": "Are supply chain security practices integrated into cybersecurity and ERM programs, and is their performance monitored?",
            "gap_description": "A lack of integration and monitoring means the organization cannot verify if its supply chain security practices are actually being followed or if they are effective."
        },
        {
            "id": "GV.SC-10",
            "order": 31,
            "family": "Govern - Cybersecurity Supply Chain Risk Management",
            "title": "Offboarding and Transition Planning",
            "assessment_question": "Do C-SCRM plans include provisions for activities that occur after the conclusion of a partnership or service agreement?",
            "gap_description": "Improper offboarding of a supplier can leave access accounts active or data unsecured, creating significant security risks even after the relationship has ended."
        },
        {
            "id": "ID.AM-01",
            "order": 32,
            "family": "Identify - Asset Management",
            "title": "Hardware Inventory",
            "assessment_question": "Is an inventory of hardware managed by the organization maintained?",
            "gap_description": "You cannot protect what you do not know you have. An incomplete hardware inventory leads to unmanaged and unsecured devices on the network."
        },
        {
            "id": "ID.AM-02",
            "order": 33,
            "family": "Identify - Asset Management",
            "title": "Software and Systems Inventory",
            "assessment_question": "Is an inventory of software, services, and systems managed by the organization maintained?",
            "gap_description": "Without a complete software inventory, the organization cannot manage vulnerabilities, ensure license compliance, or detect unauthorized software."
        },
        {
            "id": "ID.AM-03",
            "order": 34,
            "family": "Identify - Asset Management",
            "title": "Network Communication and Data Flow Mapping",
            "assessment_question": "Are representations of the organization's authorized network communication and internal/external network data flows maintained?",
            "gap_description": "A lack of data flow maps makes it difficult to design effective network segmentation, identify anomalous traffic, or understand the impact of a breach."
        },
        {
            "id": "ID.AM-04",
            "order": 35,
            "family": "Identify - Asset Management",
            "title": "Supplier Services Inventory",
            "assessment_question": "Is an inventory of services provided by suppliers maintained?",
            "gap_description": "Failure to track supplier services leads to a poor understanding of third-party dependencies and the risks they introduce."
        },
        {
            "id": "ID.AM-05",
            "order": 36,
            "family": "Identify - Asset Management",
            "title": "Asset Prioritization",
            "assessment_question": "Are assets prioritized based on classification, criticality, resources, and impact on the mission?",
            "gap_description": "Without asset prioritization, security resources are spread thin instead of being focused on protecting the most critical systems and data."
        },
        {
            "id": "ID.AM-07",
            "order": 37,
            "family": "Identify - Asset Management",
            "title": "Data Inventory",
            "assessment_question": "Is an inventory of data and corresponding metadata for designated data types maintained?",
            "gap_description": "An incomplete data inventory means sensitive data may be stored in unauthorized locations without proper security controls."
        },
        {
            "id": "ID.AM-08",
            "order": 38,
            "family": "Identify - Asset Management",
            "title": "Asset Lifecycle Management",
            "assessment_question": "Are systems, hardware, software, services, and data managed throughout their life cycles?",
            "gap_description": "Poor lifecycle management results in outdated and unsupported assets remaining on the network, which are often highly vulnerable to attack."
        },
        {
            "id": "ID.RA-01",
            "order": 39,
            "family": "Identify - Risk Assessment",
            "title": "Vulnerability Identification",
            "assessment_question": "Are vulnerabilities in assets identified, validated, and recorded?",
            "gap_description": "Undiscovered vulnerabilities are a primary entry point for attackers. A lack of a systematic vulnerability identification process leaves the organization exposed."
        },
        {
            "id": "ID.RA-02",
            "order": 40,
            "family": "Identify - Risk Assessment",
            "title": "Threat Intelligence Reception",
            "assessment_question": "Is cyber threat intelligence received from information sharing forums and other sources?",
            "gap_description": "Operating without threat intelligence is like defending blind. The organization will be unprepared for new attack techniques and emerging threats."
        },
        {
            "id": "ID.RA-03",
            "order": 41,
            "family": "Identify - Risk Assessment",
            "title": "Threat Identification",
            "assessment_question": "Are internal and external threats to the organization identified and recorded?",
            "gap_description": "Failure to identify relevant threats means security controls may be focused on the wrong problems, leaving likely attack vectors unprotected."
        },
        {
            "id": "ID.RA-04",
            "order": 42,
            "family": "Identify - Risk Assessment",
            "title": "Impact and Likelihood Assessment",
            "assessment_question": "Are the potential impacts and likelihoods of threats exploiting vulnerabilities identified and recorded?",
            "gap_description": "Without assessing impact and likelihood, risks cannot be properly prioritized, and resources may be wasted on low-risk issues while critical risks go unaddressed."
        },
        {
            "id": "ID.RA-05",
            "order": 43,
            "family": "Identify - Risk Assessment",
            "title": "Inherent Risk Analysis",
            "assessment_question": "Are threats, vulnerabilities, likelihoods, and impacts used to understand inherent risk and inform risk response prioritization?",
            "gap_description": "A failure to analyze inherent risk leads to a poor understanding of the baseline risk level and makes it difficult to measure the effectiveness of security controls."
        },
        {
            "id": "ID.RA-06",
            "order": 44,
            "family": "Identify - Risk Assessment",
            "title": "Risk Response Planning and Tracking",
            "assessment_question": "Are risk responses chosen, prioritized, planned, tracked, and communicated?",
            "gap_description": "Identifying risks without planning and tracking the response is ineffective. Risks will remain unmitigated without a formal process for remediation."
        },
        {
            "id": "ID.RA-07",
            "order": 45,
            "family": "Identify - Risk Assessment",
            "title": "Change and Exception Management",
            "assessment_question": "Are changes and exceptions managed, assessed for risk impact, recorded, and tracked?",
            "gap_description": "Uncontrolled changes and exceptions introduce new vulnerabilities and misconfigurations, undermining the established security posture."
        },
        {
            "id": "ID.RA-08",
            "order": 46,
            "family": "Identify - Risk Assessment",
            "title": "Vulnerability Disclosure Process",
            "assessment_question": "Are processes for receiving, analyzing, and responding to vulnerability disclosures established?",
            "gap_description": "Without a clear process for handling vulnerability disclosures, valuable information from external researchers may be ignored, leaving critical vulnerabilities unpatched."
        },
        {
            "id": "ID.RA-09",
            "order": 47,
            "family": "Identify - Risk Assessment",
            "title": "Hardware and Software Integrity Assessment",
            "assessment_question": "Is the authenticity and integrity of hardware and software assessed prior to acquisition and use?",
            "gap_description": "Introducing counterfeit or tampered hardware and software into the environment can create backdoors and introduce undetectable security risks."
        },
        {
            "id": "ID.RA-10",
            "order": 48,
            "family": "Identify - Risk Assessment",
            "title": "Critical Supplier Assessment",
            "assessment_question": "Are critical suppliers assessed prior to acquisition?",
            "gap_description": "Onboarding a critical supplier without a security assessment can introduce significant and unmanaged third-party risk into the organization."
        },
        {
            "id": "ID.IM-01",
            "order": 49,
            "family": "Identify - Improvement",
            "title": "Improvements from Evaluations",
            "assessment_question": "Are improvements identified from evaluations (e.g., audits, assessments)?",
            "gap_description": "If lessons learned from evaluations are not used to drive improvement, the organization will repeat the same mistakes and fail to mature its security program."
        },
        {
            "id": "ID.IM-02",
            "order": 50,
            "family": "Identify - Improvement",
            "title": "Improvements from Security Tests and Exercises",
            "assessment_question": "Are improvements identified from security tests and exercises, including those with suppliers?",
            "gap_description": "Failure to act on findings from security tests (like penetration tests or tabletop exercises) means that identified weaknesses will not be fixed, leaving the organization vulnerable."
        },
        {
            "id": "ID.IM-03",
            "order": 51,
            "family": "Identify - Improvement",
            "title": "Improvements from Operations",
            "assessment_question": "Are improvements identified from the execution of operational processes, procedures, and activities?",
            "gap_description": "Without a feedback loop from daily operations, the security program cannot adapt to real-world conditions and becomes less effective over time."
        },
        {
            "id": "ID.IM-04",
            "order": 52,
            "family": "Identify - Improvement",
            "title": "Cybersecurity Plan Maintenance and Improvement",
            "assessment_question": "Are incident response plans and other cybersecurity plans that affect operations established, communicated, maintained, and improved?",
            "gap_description": "Static plans that are not regularly maintained and improved become outdated and are ineffective when an actual incident occurs."
        },
        {
            "id": "PR.AA-01",
            "order": 53,
            "family": "Protect - Identity Management, Authentication, and Access Control",
            "title": "Identity and Credential Management",
            "assessment_question": "Are identities and credentials for authorized users, services, and hardware managed by the organization?",
            "gap_description": "Poor identity management leads to orphaned accounts, shared credentials, and an inability to uniquely identify who is accessing systems, making accountability impossible."
        },
        {
            "id": "PR.AA-02",
            "order": 54,
            "family": "Protect - Identity Management, Authentication, and Access Control",
            "title": "Identity Proofing and Binding",
            "assessment_question": "Are identities proofed and bound to credentials based on the context of interactions?",
            "gap_description": "Weak identity proofing can allow unauthorized individuals to obtain valid credentials, giving them illegitimate access to systems and data."
        },
        {
            "id": "PR.AA-03",
            "order": 55,
            "family": "Protect - Identity Management, Authentication, and Access Control",
            "title": "Authentication of Users, Services, and Hardware",
            "assessment_question": "Are users, services, and hardware authenticated before being granted access?",
            "gap_description": "Failure to authenticate all entities allows unauthorized users and devices to connect to the network and access resources, creating a significant security breach."
        },
        {
            "id": "PR.AA-04",
            "order": 56,
            "family": "Protect - Identity Management, Authentication, and Access Control",
            "title": "Identity Assertion Protection",
            "assessment_question": "Are identity assertions (e.g., tokens, tickets) protected, conveyed, and verified?",
            "gap_description": "Unprotected identity assertions can be stolen, replayed, or forged, allowing an attacker to impersonate legitimate users and bypass authentication controls."
        },
        {
            "id": "PR.AA-05",
            "order": 57,
            "family": "Protect - Identity Management, Authentication, and Access Control",
            "title": "Access Permission Management (Least Privilege)",
            "assessment_question": "Are access permissions, entitlements, and authorizations defined, managed, and reviewed, incorporating the principles of least privilege and separation of duties?",
            "gap_description": "Failure to enforce least privilege results in users and services having excessive permissions, which increases the impact of a compromised account."
        },
        {
            "id": "PR.AA-06",
            "order": 58,
            "family": "Protect - Identity Management, Authentication, and Access Control",
            "title": "Physical Access Management",
            "assessment_question": "Is physical access to assets managed, monitored, and enforced commensurate with risk?",
            "gap_description": "Weak physical security can undermine all logical security controls, as an attacker with physical access can tamper with or steal equipment."
        },
        {
            "id": "PR.AT-01",
            "order": 59,
            "family": "Protect - Awareness and Training",
            "title": "General Security Awareness and Training",
            "assessment_question": "Are personnel provided with awareness and training so they possess the knowledge and skills to perform general tasks with cybersecurity risks in mind?",
            "gap_description": "An untrained workforce is the weakest link in security. Employees are more likely to fall for phishing attacks and engage in risky behavior without proper training."
        },
        {
            "id": "PR.AT-02",
            "order": 60,
            "family": "Protect - Awareness and Training",
            "title": "Specialized Role-Based Training",
            "assessment_question": "Are individuals in specialized roles provided with awareness and training so they possess the knowledge and skills to perform relevant tasks with cybersecurity risks in mind?",
            "gap_description": "Personnel with elevated privileges or specialized security roles require advanced training. A lack of this training can lead to critical misconfigurations and security failures."
        },
        {
            "id": "PR.DS-01",
            "order": 61,
            "family": "Protect - Data Security",
            "title": "Data-at-Rest Protection",
            "assessment_question": "Is the confidentiality, integrity, and availability of data-at-rest protected?",
            "gap_description": "Unprotected data-at-rest (e.g., on servers, laptops) is vulnerable to theft. If a device is lost or stolen, unencrypted data is freely accessible."
        },
        {
            "id": "PR.DS-02",
            "order": 62,
            "family": "Protect - Data Security",
            "title": "Data-in-Transit Protection",
            "assessment_question": "Is the confidentiality, integrity, and availability of data-in-transit protected?",
            "gap_description": "Unprotected data-in-transit can be intercepted and read by attackers (e.g., through man-in-the-middle attacks), exposing sensitive information."
        },
        {
            "id": "PR.DS-10",
            "order": 63,
            "family": "Protect - Data Security",
            "title": "Data-in-Use Protection",
            "assessment_question": "Is the confidentiality, integrity, and availability of data-in-use protected?",
            "gap_description": "Data can be vulnerable while it is being processed in memory. Lack of data-in-use protection can expose sensitive information to memory-scraping malware or other processes."
        },
        {
            "id": "PR.DS-11",
            "order": 64,
            "family": "Protect - Data Security",
            "title": "Backup Management",
            "assessment_question": "Are backups of data created, protected, maintained, and tested?",
            "gap_description": "Without reliable and tested backups, the organization cannot recover from a data loss event, such as a ransomware attack or hardware failure."
        },
        {
            "id": "PR.PS-01",
            "order": 65,
            "family": "Protect - Platform Security",
            "title": "Configuration Management",
            "assessment_question": "Are configuration management practices established and applied?",
            "gap_description": "Without strong configuration management, systems will drift from a secure baseline, leading to inconsistencies and vulnerabilities across the environment."
        },
        {
            "id": "PR.PS-02",
            "order": 66,
            "family": "Protect - Platform Security",
            "title": "Software Maintenance",
            "assessment_question": "Is software maintained, replaced, and removed commensurate with risk?",
            "gap_description": "Failure to maintain software (i.e., apply patches) is a leading cause of security breaches. Unpatched software contains known, exploitable vulnerabilities."
        },
        {
            "id": "PR.PS-03",
            "order": 67,
            "family": "Protect - Platform Security",
            "title": "Hardware Maintenance",
            "assessment_question": "Is hardware maintained, replaced, and removed commensurate with risk?",
            "gap_description": "Outdated and unsupported hardware may not receive security updates and can be unreliable, posing a risk to availability and security."
        },
        {
            "id": "PR.PS-04",
            "order": 68,
            "family": "Protect - Platform Security",
            "title": "Log Record Generation",
            "assessment_question": "Are log records generated and made available for continuous monitoring?",
            "gap_description": "Without adequate logging, it is impossible to detect malicious activity, investigate a security incident, or troubleshoot operational issues."
        },
        {
            "id": "PR.PS-05",
            "order": 69,
            "family": "Protect - Platform Security",
            "title": "Unauthorized Software Prevention",
            "assessment_question": "Is the installation and execution of unauthorized software prevented?",
            "gap_description": "Allowing unauthorized software increases the risk of malware infection and introduces unsupported and potentially vulnerable applications into the environment."
        },
        {
            "id": "PR.PS-06",
            "order": 70,
            "family": "Protect - Platform Security",
            "title": "Secure Software Development",
            "assessment_question": "Are secure software development practices integrated and their performance monitored throughout the software development life cycle?",
            "gap_description": "Insecure development practices lead to applications with built-in vulnerabilities that are difficult and costly to fix after deployment."
        },
        {
            "id": "PR.IR-01",
            "order": 71,
            "family": "Protect - Technology Infrastructure Resilience",
            "title": "Network Protection",
            "assessment_question": "Are networks and environments protected from unauthorized logical access and usage?",
            "gap_description": "A poorly protected network allows attackers to move laterally with ease, escalating a minor compromise into a major breach."
        },
        {
            "id": "PR.IR-02",
            "order": 72,
            "family": "Protect - Technology Infrastructure Resilience",
            "title": "Environmental Threat Protection",
            "assessment_question": "Are the organization's technology assets protected from environmental threats (e.g., fire, flood, temperature)?",
            "gap_description": "Failure to protect against environmental threats can lead to catastrophic data loss and extended downtime from which the organization may not recover."
        },
        {
            "id": "PR.IR-03",
            "order": 73,
            "family": "Protect - Technology Infrastructure Resilience",
            "title": "Resilience Mechanisms",
            "assessment_question": "Are mechanisms implemented to achieve resilience requirements in normal and adverse situations?",
            "gap_description": "Without resilience mechanisms (e.g., redundancy, failover), a single component failure can cause a complete outage of a critical system."
        },
        {
            "id": "PR.IR-04",
            "order": 74,
            "family": "Protect - Technology Infrastructure Resilience",
            "title": "Resource Capacity Management",
            "assessment_question": "Is adequate resource capacity to ensure availability maintained?",
            "gap_description": "Insufficient capacity can lead to performance degradation and denial-of-service conditions, impacting the availability of critical services."
        },
        {
            "id": "DE.CM-01",
            "order": 75,
            "family": "Detect - Continuous Monitoring",
            "title": "Network Monitoring",
            "assessment_question": "Are networks and network services monitored to find potentially adverse events?",
            "gap_description": "Without network monitoring, malicious activity such as scanning, unauthorized access attempts, and data exfiltration can go completely undetected."
        },
        {
            "id": "DE.CM-02",
            "order": 76,
            "family": "Detect - Continuous Monitoring",
            "title": "Physical Environment Monitoring",
            "assessment_question": "Is the physical environment monitored to find potentially adverse events?",
            "gap_description": "A lack of physical environment monitoring means a physical breach (e.g., unauthorized access, tampering) could go unnoticed, undermining all logical security controls."
        },
        {
            "id": "DE.CM-03",
            "order": 77,
            "family": "Detect - Continuous Monitoring",
            "title": "Personnel and Technology Usage Monitoring",
            "assessment_question": "Is personnel activity and technology usage monitored to find potentially adverse events?",
            "gap_description": "Failure to monitor user and system activity creates a blind spot for detecting insider threats, compromised accounts, and policy violations."
        },
        {
            "id": "DE.CM-06",
            "order": 78,
            "family": "Detect - Continuous Monitoring",
            "title": "External Service Provider Monitoring",
            "assessment_question": "Are external service provider activities and services monitored to find potentially adverse events?",
            "gap_description": "Assuming suppliers are secure without monitoring their activity exposes the organization to third-party risks that could lead to a breach."
        },
        {
            "id": "DE.CM-09",
            "order": 79,
            "family": "Detect - Continuous Monitoring",
            "title": "Computing Asset Monitoring",
            "assessment_question": "Are computing hardware and software, runtime environments, and their data monitored to find potentially adverse events?",
            "gap_description": "Without monitoring computing assets for indicators of compromise, malware and attacker activity on endpoints and servers can persist for long periods."
        },
        {
            "id": "DE.AE-02",
            "order": 80,
            "family": "Detect - Adverse Event Analysis",
            "title": "Event Analysis",
            "assessment_question": "Are potentially adverse events analyzed to better understand associated activities?",
            "gap_description": "Simply collecting alerts without analyzing them is useless. Unanalyzed events mean that real threats are missed in the noise."
        },
        {
            "id": "DE.AE-03",
            "order": 81,
            "family": "Detect - Adverse Event Analysis",
            "title": "Information Correlation",
            "assessment_question": "Is information correlated from multiple sources?",
            "gap_description": "Analyzing security data from a single source provides limited context. A lack of correlation makes it difficult to detect sophisticated, multi-stage attacks."
        },
        {
            "id": "DE.AE-04",
            "order": 82,
            "family": "Detect - Adverse Event Analysis",
            "title": "Impact and Scope Assessment",
            "assessment_question": "Is the estimated impact and scope of adverse events understood?",
            "gap_description": "Failure to quickly understand the impact and scope of an event hinders effective prioritization and response, allowing a minor incident to escalate."
        },
        {
            "id": "DE.AE-06",
            "order": 83,
            "family": "Detect - Adverse Event Analysis",
            "title": "Information Dissemination",
            "assessment_question": "Is information on adverse events provided to authorized staff and tools?",
            "gap_description": "If event information is not shared with the right people and tools, the response will be slow and uncoordinated."
        },
        {
            "id": "DE.AE-07",
            "order": 84,
            "family": "Detect - Adverse Event Analysis",
            "title": "Threat Intelligence Integration",
            "assessment_question": "Is cyber threat intelligence and other contextual information integrated into the analysis?",
            "gap_description": "Analyzing events without the context of threat intelligence makes it difficult to identify known malicious indicators and understand adversary TTPs."
        },
        {
            "id": "DE.AE-08",
            "order": 85,
            "family": "Detect - Adverse Event Analysis",
            "title": "Incident Declaration",
            "assessment_question": "Are incidents declared when adverse events meet the defined incident criteria?",
            "gap_description": "Without clear criteria for declaring an incident, the formal incident response process may be delayed or never initiated, leading to a disorganized and ineffective response."
        },
        {
            "id": "RS.MA-01",
            "order": 86,
            "family": "Respond - Incident Management",
            "title": "Incident Response Plan Execution",
            "assessment_question": "Is the incident response plan executed in coordination with relevant third parties once an incident is declared?",
            "gap_description": "Having an incident response plan is not enough; if it is not executed effectively during an incident, the response will be chaotic and damage will increase."
        },
        {
            "id": "RS.MA-02",
            "order": 87,
            "family": "Respond - Incident Management",
            "title": "Incident Triage and Validation",
            "assessment_question": "Are incident reports triaged and validated?",
            "gap_description": "Without proper triage, the response team can be overwhelmed by false positives, wasting valuable time and resources while real incidents are ignored."
        },
        {
            "id": "RS.MA-03",
            "order": 88,
            "family": "Respond - Incident Management",
            "title": "Incident Categorization and Prioritization",
            "assessment_question": "Are incidents categorized and prioritized?",
            "gap_description": "Failure to categorize and prioritize incidents leads to an inefficient response, where critical incidents may not receive the immediate attention they require."
        },
        {
            "id": "RS.MA-04",
            "order": 89,
            "family": "Respond - Incident Management",
            "title": "Incident Escalation",
            "assessment_question": "Are incidents escalated or elevated as needed?",
            "gap_description": "A lack of a clear escalation path means that major incidents may not get the necessary resources or leadership attention, hindering an effective resolution."
        },
        {
            "id": "RS.MA-05",
            "order": 90,
            "family": "Respond - Incident Management",
            "title": "Incident Recovery Initiation",
            "assessment_question": "Are the criteria for initiating incident recovery applied?",
            "gap_description": "Without clear criteria, the transition from response to recovery can be delayed, prolonging the outage and business impact of an incident."
        },
        {
            "id": "RS.AN-03",
            "order": 91,
            "family": "Respond - Incident Analysis",
            "title": "Root Cause Analysis",
            "assessment_question": "Is analysis performed to establish what has taken place during an incident and the root cause of the incident?",
            "gap_description": "Without a thorough root cause analysis, the organization will only fix the symptoms of a breach, not the underlying vulnerability, making it likely the same incident will happen again."
        },
        {
            "id": "RS.AN-06",
            "order": 92,
            "family": "Respond - Incident Analysis",
            "title": "Investigation Record Keeping",
            "assessment_question": "Are actions performed during an investigation recorded, and is the records' integrity and provenance preserved?",
            "gap_description": "Poor record keeping during an investigation hinders post-incident review, makes it difficult to prove actions in a legal context, and prevents learning from the incident."
        },
        {
            "id": "RS.AN-07",
            "order": 93,
            "family": "Respond - Incident Analysis",
            "title": "Evidence Collection and Preservation",
            "assessment_question": "Are incident data and metadata collected, and is their integrity and provenance preserved?",
            "gap_description": "Failure to preserve the integrity of evidence (chain of custody) can render it inadmissible in legal proceedings and makes forensic analysis unreliable."
        },
        {
            "id": "RS.AN-08",
            "order": 94,
            "family": "Respond - Incident Analysis",
            "title": "Incident Magnitude Estimation",
            "assessment_question": "Is an incident's magnitude estimated and validated?",
            "gap_description": "Inaccurately assessing the magnitude of an incident can lead to an improper response, either by overreacting to a minor event or underestimating a major crisis."
        },
        {
            "id": "RS.CO-02",
            "order": 95,
            "family": "Respond - Incident Response Reporting and Communication",
            "title": "Stakeholder Notification",
            "assessment_question": "Are internal and external stakeholders notified of incidents?",
            "gap_description": "Failure to notify relevant stakeholders (e.g., legal, PR, customers, regulators) in a timely and accurate manner can exacerbate the damage from an incident and lead to legal and reputational consequences."
        },
        {
            "id": "RS.CO-03",
            "order": 96,
            "family": "Respond - Incident Response Reporting and Communication",
            "title": "Information Sharing",
            "assessment_question": "Is information shared with designated internal and external stakeholders?",
            "gap_description": "Hoarding information during an incident leads to a siloed and ineffective response. Sharing information with relevant parties is critical for coordination."
        },
        {
            "id": "RS.MI-01",
            "order": 97,
            "family": "Respond - Incident Mitigation",
            "title": "Incident Containment",
            "assessment_question": "Are incidents contained?",
            "gap_description": "Failure to quickly contain an incident allows the attacker to expand their foothold, access more systems, and cause greater damage."
        },
        {
            "id": "RS.MI-02",
            "order": 98,
            "family": "Respond - Incident Mitigation",
            "title": "Incident Eradication",
            "assessment_question": "Are incidents eradicated?",
            "gap_description": "If the attacker's presence is not fully eradicated from the network, they will likely regain access and the incident will recur."
        },
        {
            "id": "RC.RP-01",
            "order": 99,
            "family": "Recover - Incident Recovery Plan Execution",
            "title": "Recovery Plan Execution",
            "assessment_question": "Is the recovery portion of the incident response plan executed once initiated?",
            "gap_description": "A failure to execute the recovery plan effectively will prolong the outage, increase business losses, and delay the restoration of normal operations."
        },
        {
            "id": "RC.RP-02",
            "order": 100,
            "family": "Recover - Incident Recovery Plan Execution",
            "title": "Recovery Action Scoping and Prioritization",
            "assessment_question": "Are recovery actions selected, scoped, prioritized, and performed?",
            "gap_description": "Without proper scoping and prioritization, recovery efforts may be unfocused, restoring low-priority systems first while critical services remain offline."
        },
        {
            "id": "RC.RP-03",
            "order": 101,
            "family": "Recover - Incident Recovery Plan Execution",
            "title": "Backup Integrity Verification",
            "assessment_question": "Is the integrity of backups and other restoration assets verified before using them for restoration?",
            "gap_description": "Restoring from a compromised or corrupted backup can re-introduce malware into the environment or fail completely, undermining the entire recovery process."
        },
        {
            "id": "RC.RP-04",
            "order": 102,
            "family": "Recover - Incident Recovery Plan Execution",
            "title": "Post-Incident Operational Norms",
            "assessment_question": "Are critical mission functions and cybersecurity risk management considered to establish post-incident operational norms?",
            "gap_description": "Rushing back to the pre-incident state without considering necessary security improvements may leave the organization vulnerable to an immediate repeat attack."
        },
        {
            "id": "RC.RP-05",
            "order": 103,
            "family": "Recover - Incident Recovery Plan Execution",
            "title": "Restoration and Verification",
            "assessment_question": "Is the integrity of restored assets verified, are systems and services restored, and is normal operating status confirmed?",
            "gap_description": "Declaring recovery complete without verifying the integrity and functionality of restored systems can lead to ongoing instability and a false sense of security."
        },
        {
            "id": "RC.RP-06",
            "order": 104,
            "family": "Recover - Incident Recovery Plan Execution",
            "title": "Recovery Declaration and Documentation",
            "assessment_question": "Is the end of incident recovery declared based on criteria, and is incident-related documentation completed?",
            "gap_description": "Without formally closing the recovery process and completing documentation, the incident response cycle is incomplete, and valuable lessons learned may be lost."
        },
        {
            "id": "RC.CO-03",
            "order": 105,
            "family": "Recover - Incident Recovery Communication",
            "title": "Recovery Status Communication",
            "assessment_question": "Are recovery activities and progress in restoring operational capabilities communicated to designated internal and external stakeholders?",
            "gap_description": "A lack of communication during recovery creates uncertainty and frustration for stakeholders, damaging confidence and trust in the organization's ability to manage the crisis."
        },
        {
            "id": "RC.CO-04",
            "order": 106,
            "family": "Recover - Incident Recovery Communication",
            "title": "Public Updates",
            "assessment_question": "Are public updates on incident recovery shared using approved methods and messaging?",
            "gap_description": "Poor or non-existent public communication during recovery can lead to misinformation, reputational damage, and a loss of customer trust."
        }
    ]
});
