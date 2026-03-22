// Esta é uma forma comum de passar informações entre componentes usando props.
// Não há problema nenhum nessa abordagem, principalmente em estruturas pequenas.
// O objetivo aqui é mostrar que, quando existem várias camadas de componentes,
// pode ser necessário repassar os mesmos dados diversas vezes até chegar
// no componente que realmente vai utilizá-los.
"use client"; // Next.js: indica que este componente roda no lado do cliente

// Props do Subtitle: recebe um texto (label)
type SubtitleProps = {
  label: string;
};

// Componente simples que apenas exibe o texto recebido
const Subtitle = ({ label }: SubtitleProps) => {
  return <p>{label}</p>;
};

// Props do Title: também recebe um texto (label)
type TitleProps = {
  label: string;
};

// Componente que renderiza o título com estilo
const Title = ({ label }: TitleProps) => {
  return <h1 className="text-4xl font-bold my-4">{label}</h1>;
};

// Props do Header: recebe title e subtitle
type HeaderProps = {
  title: string;
  subtitle: string;
};

// Componente intermediário: recebe dados e repassa para os filhos
const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header>
      {/* repasse de props */}
      <Title label={title} />
      <Subtitle label={subtitle} />
    </header>
  );
};

const Page = () => {
  // origem dos dados (estado inicial da página)
  const pageInfo = {
    title: "Título maroto",
    subtitle: "Subtítulo muito legal",
  };

  return (
    <div className="container mx-auto">
      {/* envio de dados para o Header */}
      <Header title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
};

export default Page;