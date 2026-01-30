interface Props {
  title: string;
  subTitle?: string;
}

const defaultSubtitle =
  'Ropa futurista y elegante inspirada en el diseño futurista de Tesla. \nCalidad premium para un estilo atemporal.'
  ;

export const CustomJumbotrom = ({ title, subTitle }: Props) => {
  return (
    <section className="py-10 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto text-center">
        <h1 className=" font-montserrat text-2xl lg:text-5xl font-light tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto whitespace-pre-line">
          {defaultSubtitle || subTitle}
        </p>
      </div>
    </section>
  );
};
