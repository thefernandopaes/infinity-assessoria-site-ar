import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  nome: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Teléfono inválido"),
  empresa: z.string().min(2, "El nombre de la empresa es obligatorio"),
  servico: z.string().min(1, "Seleccioná un servicio"),
  mensagem: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "contato@infinity.com.br" },
  { icon: MapPin, label: "Dirección", value: "São Paulo, SP" },
];

// Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function Contato() {
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation();
  const { ref: formRef, isVisible: formVis } = useScrollAnimation();
  const [sending, setSending] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", email: "", telefone: "", empresa: "", servico: "", mensagem: "" },
  });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo contacto: ${data.nome} — ${data.servico}`,
          from_name: data.nome,
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          empresa: data.empresa,
          servico: data.servico,
          mensagem: data.mensagem,
        }),
      });
      const result = await res.json();
      if (result.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Nos pondremos en contacto pronto.",
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch {
      toast({
        title: "Error al enviar",
        description: "Intentá de nuevo o escribinos por email.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section ref={heroRef} className="pt-16 pb-12 bg-muted/50">
        <div className={`container mx-auto px-4 lg:px-8 text-center max-w-3xl ${heroVis ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Contacto</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
            ¿Hablamos?
          </h1>
          <p className="text-lg text-muted-foreground">
            Completá el formulario y nuestro equipo se pondrá en contacto con vos.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section ref={formRef} className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className={`lg:col-span-3 ${formVis ? "animate-fade-in" : "opacity-0"}`}>
              <div className="bg-card rounded-2xl border p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Enviá tu mensaje</h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="nome" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo</FormLabel>
                          <FormControl><Input placeholder="Tu nombre" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl><Input type="email" placeholder="tu@email.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="telefone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl><Input placeholder="+54 11 9999-9999" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="empresa" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa</FormLabel>
                          <FormControl><Input placeholder="Nombre de la empresa" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="servico" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Servicio de interés</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccioná un servicio" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="automacao">Automatización de Flujos</SelectItem>
                            <SelectItem value="gestao">Gestión Transaccional</SelectItem>
                            <SelectItem value="integracao">Integración de Sistemas</SelectItem>
                            <SelectItem value="parceiros">Gestión de Socios</SelectItem>
                            <SelectItem value="conciliacao">Conciliación Operativa</SelectItem>
                            <SelectItem value="bi">Reportes y BI</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="mensagem" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl><Textarea placeholder="Contanos sobre tu proyecto..." rows={4} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" size="lg" disabled={sending} className="w-full rounded-full gradient-primary border-0 text-primary-foreground hover:opacity-90 gap-2">
                      {sending ? (
                        <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                      ) : (
                        <>Enviar Mensaje <Send size={18} /></>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className={`lg:col-span-2 space-y-6 ${formVis ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl border p-8 space-y-6">
                <h3 className="font-heading text-xl font-bold text-foreground">Información de Contacto</h3>
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
