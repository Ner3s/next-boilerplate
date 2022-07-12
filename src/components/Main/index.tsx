import * as S from './styles';

function Main({
  title = 'NextJS - Boilerplate',
  description = 'NextJS, Typescript e Styled-Components'
}) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}

export { Main };
