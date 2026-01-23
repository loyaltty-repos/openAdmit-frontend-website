import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
};

export default function Page() {
  return (
    <main>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h1>Cancellation & Refund Policy</h1>
            <h2>ARTICLE I: CANCELLATION AND REFUND POLICY</h2>
            <p>
              <strong>1.1. GRACE PERIOD FOR CANCELLATION:</strong> The Client is
              granted a maximum period of{" "}
              <strong>twenty-five (25) calendar days</strong> from the Effective
              Date of this Agreement (date of signing the agreement) to request
              a modification to the scope of service or a full cancellation. All
              such requests must be transmitted in writing via email to{" "}
              <strong>contactus@openadmits.com</strong>.
            </p>
            <p>
              <strong>
                1.1.1. REDUCED GRACE PERIOD FOR LATE REGISTRATIONS:
              </strong>{" "}
              Notwithstanding Section 1.1, if the Client registers for services
              within forty-five (45) calendar days of any stated application or
              program deadline, the grace period for cancellation or scope
              modification shall be limited to seven (7) calendar days from the
              Effective Date. All such requests must be transmitted in writing
              via email to <strong>contactus@openadmits.com</strong>.
            </p>
            <p>
              <strong>
                1.2. IRREVOCABLE WAIVER OF REFUND UPON COMMENCEMENT OF SERVICE:
              </strong>{" "}
              The Client is hereby notified and explicitly agrees that the
              payment made is for access to the Consultant&apos;s expertise,
              intellectual property, and reserved time. The fee shall become
              fully non-refundable, notwithstanding the 25-day grace period,
              once the Client avails a significant duration of the service.
              Specifically, the fee is deemed fully earned and non-refundable
              immediately upon the completion of the Initial Strategy Call or
              the delivery of the first substantive round of work (e.g., the
              first full essay edit or profile strategy document), regardless of
              whether the 25-day grace period has expired. This clause reflects
              the fact that the primary value of the Consulting Service is
              delivered at the outset through proprietary strategic guidance and
              personalized feedback, the benefit of which cannot be recaptured
              by the Consultant once released to the Client. The Client
              irrevocably waives any and all rights to a refund or package
              modification once this threshold of service commencement is met.
            </p>
            <p>
              <strong>1.3. NON-REFUNDABLE EVENTS:</strong> Refunds shall not be
              issued in the event of the following conditions:
            </p>
            <ul>
              <li>
                The Client has accessed or downloaded proprietary materials.
              </li>
              <li>
                Work on the Client&apos;s profile has formally commenced (as
                defined in Section 1.2).
              </li>
              <li>
                The Client fails to provide necessary inputs or respond on time.
              </li>
              <li>
                The Client expresses dissatisfaction stemming from academic
                admission outcomes, which are not guaranteed under this
                Agreement.
              </li>
              <li>
                The Client breaches Section 1.5 (No Third-Party Involvement).
              </li>
            </ul>
            <p>
              <strong>
                1.4. PROPORTIONAL DEDUCTION (Applicable only if refund is
                approved before service commencement threshold):
              </strong>{" "}
              Should an approved refund request be submitted before the service
              commencement threshold defined in Section 1.2 is met, and only if
              within the applicable grace period (Sections 1.1 or 1.1.1), the
              refund amount shall be subject to a proportional deduction based
              on any work completed by the Consultant.
            </p>
            <p>
              <strong>1.5. REFUND PROCESSING:</strong> Any refund duly approved
              by the Consultant shall be processed within fifteen (15) business
              days to the original payment method, after applicable service or
              processing fees are deducted.
            </p>
            <h2>
              ARTICLE II: INDEMNIFICATION, LIABILITY, AND DISPUTE RESOLUTION
            </h2>
            <p>
              <strong>2.1. LIMITATION OF LIABILITY:</strong> The Consultant
              shall not be held liable for any delays, failures, or outcomes
              attributable to circumstances beyond its direct and reasonable
              control, including, but not limited to, institutional decisions,
              technical delays, internet outages, or Acts of God (Force
              Majeure). In all instances, the Consultant’s maximum aggregate
              liability for any claim, breach of contract, or negligence arising
              under this Agreement shall not exceed the total fees paid for the
              specific service in question.
            </p>
            <p>
              <strong>2.2. FORCE MAJEURE:</strong> Performance hereunder shall
              be excused to the extent that performance is prevented, delayed,
              or otherwise made impracticable by causes beyond the Consultant’s
              control, including but not limited to acts of nature, internet
              outages, or institutional policy changes.
            </p>
            <p>
              <strong>2.3. ENTIRE AGREEMENT:</strong> This document constitutes
              the entire agreement between the Consultant and the Client, and
              supersedes and replaces any and all prior verbal or written
              understandings.
            </p>
            <p>
              <strong>2.4. DISPUTE RESOLUTION:</strong> The parties shall first
              attempt, in good faith, to resolve any dispute arising out of or
              relating to this Agreement through amicable resolution. If the
              dispute remains unresolved, the matter shall be referred to
              binding arbitration under the laws of the Consultant&apos;s
              jurisdiction.
            </p>
            <p>
              <strong>CLIENT ACKNOWLEDGMENT AND ACCEPTANCE:</strong>
            </p>
            <p>
              By executing payment for the services outlined herein, the Client
              expressly confirms that they have read, understood, and
              irrevocably agreed to be bound by all clauses and stipulations
              contained within this Agreement, including the strict terms of the
              Refund and Cancellation Policy.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
