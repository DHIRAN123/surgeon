import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const galleryItems = [
  {
    title: 'Happy Client',
    topId: 'happy-client',
    beforeId: 'gallery-implant-before',
    afterId: 'gallery-implant-after',
  },
  {
    title: 'Teeth Whitening',
    topId: 'gallery-whitening',
    beforeId: 'gallery-whitening-before',
    afterId: 'gallery-whitening-after',
  },
  {
    title: 'Smile Makeover',
    topId: 'gallery-makeover',
    beforeId: 'gallery-makeover-before',
    afterId: 'gallery-makeover-after',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Our Smile Transformations
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Seeing is believing. Browse through our gallery of patient transformations and see the life-changing results of our work.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => {
            const topImg = PlaceHolderImages.find(p => p.id === item.topId);
            const beforeImg = PlaceHolderImages.find(p => p.id === item.beforeId);
            const afterImg = PlaceHolderImages.find(p => p.id === item.afterId);

            if (!topImg || !beforeImg || !afterImg) return null;

            return (
              <Card key={item.title} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-center text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 space-y-2">
                  <div className="relative">
                     <Image
                      src={topImg.imageUrl}
                      alt={item.title}
                      width={350}
                      height={250}
                      className="rounded-md object-cover w-full aspect-[4/3]"
                      data-ai-hint={topImg.imageHint}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <Image
                        src={beforeImg.imageUrl}
                        alt={`Before - ${item.title}`}
                        width={250}
                        height={250}
                        className="rounded-md object-cover aspect-square"
                        data-ai-hint={beforeImg.imageHint}
                      />
                      <Badge variant="secondary" className="absolute top-2 left-2">Before</Badge>
                    </div>
                    <div className="relative">
                      <Image
                        src={afterImg.imageUrl}
                        alt={`After - ${item.title}`}
                        width={250}
                        height={250}
                        className="rounded-md object-cover aspect-square"
                        data-ai-hint={afterImg.imageHint}
                      />
                      <Badge className="absolute top-2 left-2">After</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
