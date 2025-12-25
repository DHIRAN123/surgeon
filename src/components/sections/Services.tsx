import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Scissors, Sparkles, Syringe, Wind, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: <Wind className="h-10 w-10 text-primary" />,
    title: 'Long-Hair FUE',
    description: 'Follicular Unit Extraction for discreet, immediate, and natural-looking results.',
  },
  {
    icon: <Scissors className="h-10 w-10 text-primary" />,
    title: 'Beard, Eyebrow & Body Hair Transplants',
    description: 'Specialized transplants to restore hair in various body areas.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Hairline Design and Restoration',
    description: 'Customized hairline design to frame your face and restore a natural look.',
  },
  {
    icon: <Syringe className="h-10 w-10 text-primary" />,
    title: 'PRP Therapy',
    description: 'Platelet-Rich Plasma therapy to stimulate hair growth and thickness.',
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: 'Corrective/Transplant Revision',
    description: 'Revising and improving the results of previous hair transplant procedures.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Our Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive range of hair restoration services to meet all your needs.
            </p>
          </div>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
