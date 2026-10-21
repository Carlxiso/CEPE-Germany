import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);

const PRIVACY_VERSION = "2026-10-v1";

export async function POST(request) {
  const body = await request.json();

  if (body.consent !== true) {
    return Response.json(
      {
        ok: false,
        error: "Consentimento obrigatório em falta.",
      },
      { status: 400 },
    );
  }

  const mandatories = [
    "student",
    "birthDate",
    "guardian",
    "email",
    "phone",
    "schoolYear",
  ];

  for (const user_inputs of mandatories) {
    if (!body[user_inputs]?.trim?.()) {
      return Response.json(
        { ok: false, error: `Campo Obrigatório em falta: ${user_inputs}` },
        { status: 400 },
      );
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return Response.json(
      { ok: false, error: "Email inválido." },
      { status: 400 },
    );
  }
  const { error } = await supabaseAdmin.from("enrollments").insert({
    student_name: body.student.trim(),
    birth_date: body.birthDate,
    school_year: body.schoolYear,
    attended_epe: !!body.attendedEPE,
    previous_school: body.school?.trim() || null,
    guardian_name: body.guardian.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    city: body.city?.trim() || null,
    postal_code: body.postal?.trim() || null,
    course_location: body.schoolCity || null,
    consent: true,
    privacy_version: PRIVACY_VERSION,
    marketing_optin: !!body.marketing,
  });

  if (error) {
    console.error("Erro Supabase:", error);
    return Response.json(
      { ok: false, error: "Não foi possível gravar." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
