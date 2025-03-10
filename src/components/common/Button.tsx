import React from 'react';
import styled, { css } from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  href?: string;
}

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      `;
    case 'large':
      return css`
        padding: 1rem 2rem;
        font-size: 1.125rem;
      `;
    case 'medium':
    default:
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      `;
  }
};

const getButtonVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: var(--secondary-color);
        color: var(--text-color);
        border: 1px solid var(--secondary-color);
        
        &:hover:not(:disabled) {
          background-color: var(--secondary-color-dark);
          border-color: var(--secondary-color-dark);
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        
        &:hover:not(:disabled) {
          background-color: var(--primary-color-light);
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: var(--primary-color);
        border: none;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        
        &:hover:not(:disabled) {
          background-color: var(--primary-color-light);
        }
      `;
    case 'primary':
    default:
      return css`
        background-color: var(--primary-color);
        color: white;
        border: 1px solid var(--primary-color);
        
        &:hover:not(:disabled) {
          background-color: var(--primary-color-dark);
          border-color: var(--primary-color-dark);
        }
      `;
  }
};

const StyledButton = styled.button<{
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  
  ${({ size }) => getButtonSize(size)}
  ${({ variant }) => getButtonVariant(variant)}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  to,
  href,
  ...props
}) => {
  // If it's a link button
  if (to || href) {
    return (
      <StyledButton
        as="a"
        href={to || href}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }

  // Regular button
  return (
    <StyledButton
      type={type}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
