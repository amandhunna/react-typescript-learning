import React, { ComponentProps } from "react";

type IButtonProps = {
    children: React.ReactNode
}

function Button(props: IButtonProps & ComponentProps<"button">) {
    const { children, ...rest } = props
    return <button {...rest}>{children}</button>;
};

export default Button;
