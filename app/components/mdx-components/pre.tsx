// Dependencies
import * as React from 'react';
import { ClipboardIcon, CheckIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import copy from 'copy-to-clipboard';

// Internals
import { stringify } from '~/utils/stringify';
import { Tooltip } from '../tooltip';

type CodeProps = {
  className?: string;
};

const Pre: React.FC<CodeProps> = ({ children, className }): JSX.Element => {
  let [hasCopied, setHasCopied] = React.useState(false);
  let [code] = React.useState(() => stringify(children));
  let preRef = React.useRef<HTMLPreElement | null>(null);

  React.useEffect(() => {
    if (hasCopied) {
      copy(code);

      setTimeout(() => setHasCopied(false), 1500);
    }
  }, [code, hasCopied]);

  return (
    <div className="group relative" data-code-block>
      <pre className={clsx(className, 'relative shadow-md')} ref={preRef}>
        {children}
      </pre>

      <div className="absolute top-2 right-2">
        <Tooltip>
          <Tooltip.Trigger asChild>
            <button
              className="inline-flex bg-[color:var(--syntax-bg)] rounded-md ring-1 shadow-md opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100 transition-opacity duration-150"
              onClick={() => setHasCopied(true)}
              type="button"
            >
              {hasCopied ? (
                <CheckIcon className="m-2 w-5 h-5" />
              ) : (
                <ClipboardIcon className="m-2 w-5 h-5" />
              )}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Content
            className="text-[color:var(--syntax-fg)] bg-gray-200 dark:bg-gray-700 shadow-md"
            side="left"
            sideOffset={5}
          >
            Copy code to clipboard
            <Tooltip.Arrow className="fill-gray-200 dark:fill-gray-700" />
          </Tooltip.Content>
        </Tooltip>
      </div>
    </div>
  );
};

export { Pre };
export type { CodeProps };
