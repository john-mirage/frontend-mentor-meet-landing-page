import * as Styled from "./Step.style";

interface Props {
  className?: string;
  stepNumber: string;
}

const Step = ({ className, stepNumber }: Props) => {
  return (
    <Styled.Container className={className}>
      <Styled.Line />
      <Styled.Circle>
        <Styled.StepNumber>{stepNumber}</Styled.StepNumber>
      </Styled.Circle>
    </Styled.Container>
  );
};

export default Step;
