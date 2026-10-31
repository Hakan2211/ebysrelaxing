'use client';

import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import { sendEmail } from '@/actions/sendEmail';
import { Button } from '@/components/ui/button';
import PageHeader from '../components/page-header';

const fieldClass =
  'w-full rounded-2xl border border-[var(--bg-background-color-2)] bg-[var(--bg-background-color-3)] p-4 text-lg text-slate-900 placeholder:text-slate-500 transition-colors focus:border-[var(--bg-background-color-6)] focus:bg-white';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="brand"
      size="xl"
      disabled={pending}
      aria-disabled={pending}
      className="w-full sm:w-auto"
    >
      {pending ? 'Wird gesendet…' : 'Senden'}
    </Button>
  );
}

function Kontakt() {
  const formRef = useRef(null);

  return (
    <>
      <Toaster position="top-right" />
      <PageHeader eyebrow="Kontakt" title="Lass uns sprechen">
        <div className="space-y-2 text-lg leading-relaxed text-slate-700">
          <p>Hier kannst du mir eine Nachricht hinterlassen!</p>
          <p>
            Kontaktiere mich auf meiner E-Mail-Adresse{' '}
            <a
              className="font-medium text-[var(--bg-background-color-7)] underline underline-offset-4 transition-colors hover:text-slate-900"
              href="mailto:ebysrelaxing@gmail.com"
            >
              ebysrelaxing@gmail.com
            </a>{' '}
            oder fülle die folgenden Felder aus und sende deine Nachricht ab.
          </p>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-3xl px-4 pb-16 text-slate-800 md:pb-24">
        <form
          ref={formRef}
          className="flex flex-col gap-6 rounded-[2rem] bg-white/70 p-6 shadow-[0_10px_40px_-20px_rgb(106_96_77_/_0.4)] ring-1 ring-[var(--bg-background-color-2)] md:p-10"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(
                'Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut oder schreibe mir direkt per E-Mail.'
              );
              return;
            }
            toast.success('Nachricht wurde gesendet');
            formRef.current?.reset();
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="senderEmail" className="text-lg font-medium">
              Deine E-Mail-Adresse
            </label>
            <input
              id="senderEmail"
              className={fieldClass}
              name="senderEmail"
              type="email"
              autoComplete="email"
              required
              placeholder="name@beispiel.de"
              maxLength={500}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-lg font-medium">
              Deine Nachricht
            </label>
            <textarea
              id="message"
              className={`${fieldClass} min-h-64`}
              name="message"
              required
              placeholder="Wie kann ich dir helfen?"
              maxLength={5000}
            />
          </div>
          <SubmitButton />
        </form>
      </div>
    </>
  );
}

export default Kontakt;
