import styled from 'styled-components'

export const PopContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  width: min(95%, 30rem);
  align-items: flex-start;
  padding: 1.5rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 3000;
  border-radius: 0.75rem;
  background: #ffffff;

  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);
`
export const LayerIcon = styled.span`
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;

  border-radius: 50%;
  border: 8px solid var(--color-bg-300);
  background: var(--color-bg-200);
`

export const OptionWrapper = styled.div<{ active: boolean }>`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;

  border-radius: 0.5rem;
  border: 1px solid #a4bcfd;
  background: ${(props) => (props.active ? 'var(--color-bg-300)' : '#fff')};

  h4 {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) =>
      props.active ? 'var(--color-font-300)' : 'var(--color-font-200)'};
  }

  & > :nth-child(3) {
    margin-left: auto;
  }
`

export const BtnsWrap = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr 1fr;
`
