'use client';

import { sendEmail } from '@/actions/sendEmail';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Kontakt() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="md:col-start-2 md:col-end-5 col-start-1 col-end-6 p-4 text-slate-800">
      <Toaster position="top-right" />
      <div className="flex flex-col gap-2 mt-10 text-lg w-fit">
        <p>Hier kannst du mir eine Nachricht hinterlassen!</p>
        <div className="flex flex-col lg:flex-row ">
          <p>Kontaktiere mich auf meiner E-Mail-Adresse:</p>
          <a
            className="underline underline-offset-4 lg:ml-3 hover:text-[var(--bg-background-color-6)] "
            href="mailto:ebysrelaxing@gmail.com"
          >
            ebysrelaxing@gmail.com
          </a>
        </div>

        <p>oder fülle die folgenden Felder aus und sende deine Nachricht ab.</p>
      </div>

      <div>
        <form
          className="flex text-xl flex-col gap-4 mt-10 mb-10"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error('Nachricht konnte nicht gesendet werden', { error });
              return;
            }
            toast.success('Nachricht wurde gesendet');
            setEmail('');
            setMessage('');
          }}
        >
          <input
            className="p-4 rounded-xl outline-[var(--bg-background-color-6)]"
            name="senderEmail"
            type="email"
            required
            placeholder="Deine E-Mail-Adresse"
            maxLength={500}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="p-4 rounded-xl min-h-64 outline-[var(--bg-background-color-6)]"
            name="message"
            required
            placeholder="Deine Nachricht"
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            className=" text-lg bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
            variant="outline"
            type="submit"
          >
            Senden
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Kontakt;
