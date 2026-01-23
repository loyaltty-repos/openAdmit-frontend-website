import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function Page() {
  return (
    <main>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h1>Terms & Conditions</h1>
            <p>
              THIS CONSULTING SERVICES AGREEMENT (the “Agreement”) is entered
              into by and between OPEN ADMITS CONSULTING (the “Consultant”), and
              the individual or entity engaging the Consultant (the “Client”).
            </p>
            <p>
              EFFECTIVE DATE: The date upon which the Client submits payment or
              digitally affirms acceptance of these terms, whichever occurs
              first.
            </p>
            <p>
              GOVERNING LAW AND JURISDICTION: This Agreement shall be governed
              by, and construed in accordance with, the laws of the United
              States.
            </p>
            <h2>ARTICLE I: ENGAGEMENT, SCOPE, AND LIMITATION OF WARRANTY.</h2>
            <p>
              <strong>1.1. SCOPE OF ENGAGEMENT:</strong> The Consultant shall
              provide professional strategic consulting services limited
              exclusively to academic admissions preparation, which encompasses
              strategic guidance, essay editing, profile positioning, and
              interview preparation.
            </p>
            <p>
              <strong>1.2. NO WARRANTY OF OUTCOME:</strong> The Client covenants
              and warrants that it understands and acknowledges that the
              Consultant provides guidance only. The Consultant does not warrant
              or guarantee any specific result, including, but not limited to,
              acceptance into any academic program, the securing of
              scholarships, or the outcome of any interview, as final decisions
              rest solely with the respective institutions. Failure to secure
              admission shall not constitute a breach of this Agreement by the
              Consultant.
            </p>
            <p>
              <strong>1.3. NO FUTURE OBLIGATION (LOCK-UP CLAUSE):</strong> The
              Consultant's contractual obligations shall be deemed fully and
              finally satisfied upon the completion of the contracted services.
              Any request for subsequent guidance, edits, or consultations
              outside of the expressly agreed-upon scope shall be deemed a
              separate, future engagement and shall require a new written
              agreement and separate remuneration.
            </p>
            <p>
              <strong>1.4. NON-TRANSFERABILITY:</strong> The services detailed
              herein are personal to the enrolled Client and are
              non-transferable and non-assignable to any other individual. The
              Client is further prohibited from unilaterally deferring the
              utilization of services to a subsequent academic cycle.
            </p>
            <p>
              <strong>1.5. NO THIRD-PARTY INVOLVEMENT:</strong> The Client
              expressly covenants that the services, advice, and confidential
              communications provided by the Consultant are for the
              Client&apos;s exclusive, personal use and benefit. The Client
              shall not involve any third-party advisor, consultant, agent, or
              paid representative in the delivery or review of the
              Consultant&apos;s work, including, but not limited to, attending
              strategy calls, reviewing edited materials, or mediating
              communications. Involvement of any third party in the consulting
              process without the Consultant&apos;s prior explicit written
              consent shall be deemed a material breach of this Agreement and
              may, at the Consultant&apos;s sole discretion, result in the
              immediate and permanent termination of all services without
              refund.
            </p>
            <h2>ARTICLE II: COMPENSATION AND TERMS OF PAYMENT.</h2>
            <p>
              <strong>2.1. FEE STRUCTURE:</strong> The Client shall remit all
              contracted fees in full, or strictly according to the agreed-upon
              installment plan, prior to the formal commencement of any
              services.
            </p>
            <p>
              <strong>2.2. COMMENCEMENT AND SUSPENSION:</strong> The Consultant
              shall not be obligated to initiate any work until the initial
              payment has been successfully processed. Should the Client fail to
              remit any subsequent payment in accordance with the agreed
              schedule, the Consultant reserves the right, at its sole
              discretion, to immediately and unilaterally suspend or permanently
              terminate all provision of services under this Agreement.
            </p>
            <p>
              <strong>2.3. CLIENT COOPERATION:</strong> The Client shall be
              responsible for providing all necessary application materials,
              feedback, and responses in strict adherence to the mutual,
              agreed-upon timelines. Any extension of delivery timelines caused
              by the Client&apos;s failure to provide timely input shall not
              impose any liability or penalty upon the Consultant.
            </p>
            <h2>
              ARTICLE III: CONFIDENTIALITY, INTELLECTUAL PROPERTY, AND
              NON-DISCLOSURE.
            </h2>
            <p>
              <strong>3.1. CLIENT CONFIDENTIALITY:</strong> All personal
              information and materials shared by the Client shall be maintained
              in strict confidence by the Consultant and shall not be disclosed
              to any third party without the Client's prior express written
              consent, save and except as required by a lawful court order or
              statute.
            </p>
            <p>
              <strong>3.2. INTELLECTUAL PROPERTY (IP):</strong> All templates,
              frameworks, guides, training modules, and other materials
              developed or provided by the Consultant during the term of this
              engagement shall remain the sole and exclusive intellectual
              property of the Consultant. The Client is hereby granted a
              limited, non-exclusive, non-commercial, and non-transferable
              license for their personal, academic-application-related use only.
              The redistribution, public display, or commercial reuse of any
              Consultant IP is strictly prohibited and shall constitute a
              material breach of this Agreement.
            </p>
            <p>
              <strong>
                3.3. CONSULTANT&apos;S CONFIDENTIAL INFORMATION (NON-DISCLOSURE
                CLAUSE):
              </strong>{" "}
              The Client expressly acknowledges that the Consultant&apos;s
              methodology, internal frameworks, proprietary strategic processes,
              internal pricing and fee structures, communication protocols, and
              any non-public business information constitute valuable and
              protected trade secrets ("Consultant Confidential Information").
              The Client is hereby obligated, both during and perpetually
              following the termination of this Agreement, to maintain the
              strictest confidence regarding all Consultant Confidential
              Information. Disclosure of any such information to any third
              party, or use of such information for any purpose other than the
              Client&apos;s utilization of the contracted services, is strictly
              prohibited and shall result in immediate termination of this
              Agreement and may subject the Client to full legal remedies,
              including, but not limited to, injunctive relief and monetary
              damages.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
