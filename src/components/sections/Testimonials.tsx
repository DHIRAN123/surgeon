import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
{
  name: 'Sarah.',
  avatarId: 'testimonial-avatar-1',
  text: "Dr. Rohit Kumar is outstanding! As a UK-based specialist, he made the entire process smooth and reassuring. My new hairline looks incredibly natural. Highly recommended!",
},
{
  name: 'Micheal M.',
  avatarId: 'testimonial-avatar-2',
  text: "I was nervous about getting a transplant, but Dr. Rohit Kumar’s professionalism and calm approach put me at ease. The procedure was painless and the results are fantastic!",
},
{
  name: 'Jessica T.',
  avatarId: 'testimonial-avatar-3',
  text: "From my very first consultation at Dr. Rohit Kumar’s UK clinic to the final follow-up, the entire experience was exceptional. He took the time to understand my concerns!",
}

];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              What Our Patients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are proud of the smiles we create and the relationships we build. Here's what our patients have to say about their experience.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                const avatar = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full flex flex-col">
                        <CardContent className="flex flex-col items-center justify-center flex-grow p-6 text-center">
                          <div className="flex mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                          <p className="text-muted-foreground italic mb-4">&quot;{testimonial.text}&quot;</p>
                          <div className="flex items-center">
                            {avatar && (
                              <Avatar className="h-12 w-12 mr-4">
                                <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            )}
                            <div className="font-semibold">{testimonial.name}</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
