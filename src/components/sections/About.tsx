
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-clinic');

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16 items-center">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              Dr. ROHIT KUMAR, Hair Transplant Surgeon
            </h2>
            
            <p className="text-muted-foreground text-lg italic">
              Specialist in Advanced Hair Restoration Techniques | Personalized Care | Natural Results
            </p>
            
            <div className="text-foreground/80 text-base/relaxed space-y-4">
              <p>
                Dr. Kumar is a trained General Surgeon with broad experience across multiple surgical specialties, including plastic surgery, breast surgery, and urology. Building on this strong clinical foundation, he has pursued advanced training and certification in the innovative Long-Hair Follicular Unit Extraction (FUE) technique.
              </p>
              <p>
                The Long-Hair Transplant procedure offers an advanced solution for individuals seeking discreet, immediate, and natural-looking results. This technique allows patients to see visible improvements right after the procedure—without the need to shave the donor or recipient areas.
              </p>
              <p>
                Long-Hair FUE is especially ideal for women, as it delivers dense, natural-looking outcomes while preserving existing hair aesthetics. The ability to achieve instant, noticeable transformation makes this technique a preferred choice for those seeking subtle yet significant hair restoration with minimal downtime.
              </p>
              <p>
                With a patient-centred approach, Dr. Kumar provides personalized hair restoration plans tailored to each individual’s needs and aesthetic goals. He treats a wide spectrum of hair loss conditions, including male pattern baldness, thinning hair, traction alopecia, and scarring alopecia.
              </p>
              <p>
                Dr. Kumar uses Dr.UGraft Zeus System, he ensures that every procedure is safe, effective, and customized to match the patient’s unique hairline, facial structure, and restoration objectives.
              </p>
              <p>
                Dr. Kumar is also an active member of the FUE Europe and Asia, and continually updates his skills through ongoing education and research in the evolving field of hair restoration.
              </p>
              <p>
                Whether you’re in the early stages of hair loss or seeking to correct a previous procedure, Dr. Kumar offers the expertise, discretion, and results you can trust.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden shadow-xl w-full max-w-sm">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={800}
                    className="object-cover w-full aspect-[3/4]"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
