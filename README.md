# V0 and Cursor Integration Steps


- Create site via prompts in V0 to get out your desired layout and make sure it is imported into cursor.io

- add any .cursorrules file as necessary
    - You can use [cursor.directory](https://cursor.directory/) to find any prestaged rules to provide to cursor
        > NOTE: This adds context for cursor to under stand the tech stack that it should be leveraging for your app

- Build out local next js site
    - Create next:
    ```bash
    npx create-next-app@latest github_portfolio
    ```
    - Install shadcn and lucide-react
    > NOTE: The import of packages may vary for your sites requirements
    ```bash
    npm install shadcn lucide-react
    ```

- Once the site is up and running, import your v0 design by cliking at the top right `Add to Codebase`
    - Copy the npx shadcn string and enter this into your command line to install the components
        -  Answer the promps as follows for this example:
            - Create components.json file: Y
            - Style: New York
            - Base Color: Neutral
            - CSS Variables; yes
            - Select any other defaults


- After import, drop down `src` > `components` > `ui`
    - Copy over your pages file (in my case app-page.tsx) and move it into the `app` directory
        - Approve move if asked
    - Rename the current `page.tsx` to `page-v1.tsx`
    - Rename your page (e.g. `app-page.tsx`) to `page.tsx`
    - Reopen the original page that you move (e.g. `page-v1.tsx`) and copy the default function from that page to your code
    ```bash
    import Image from "next/image";

    export default function Home
    ```
    
    - Copy `default` and add this to the start of your new `page.tsx` export function similar to below and rename the function to `Home`
    ```bash
    'use client'

    import { useState } from 'react'
    import { Moon, Sun, Code, Linkedin, Twitter } from 'lucide-react'
    import { Button } from "@/components/ui/button"
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

    export default function Home()
    ```
    > NOTE: We have simply added `default` in from of our function and renamed the function to `Home`

- After saving, confirm that the page has loaded successfully.

- If your formatting of the page is off, begin asking cursor to fix the design as necessary





# Video walkthrough used for this
- [Cursor AI & V0 Tutorial Series: Ultimate Workflow Part 2](https://www.youtube.com/watch?v=ZBEAaSFT6Go&ab_channel=RobShocks)
    


