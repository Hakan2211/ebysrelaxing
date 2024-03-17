import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function ContactFormEmail({ message, senderEmail }) {
  return (
    <Html>
      <Head />
      <Preview>Neue Nachriucht von deiner Seite "Ebysrelaxing"</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Du hast folgende Nachricht von deiner Seite "Ebysrelaxing"
                erhalten:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Die Email vom Absender lautet: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
