import type { PageLoad } from './$types';

type GithubRepository = {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    topics: string[];
    stargazers_count: number;
    forks_count: number;
    archived: boolean;
    fork: boolean;
};

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch(
        'https://api.github.com/users/YanRabe/repos?per_page=100&sort=updated&type=owner',
        {
            headers: {
                Accept: 'application/vnd.github+json'
            }
        }
    );

    if (!response.ok) {
        return {
            repositories: [],
            error: `GitHub API returned ${response.status}`
        };
    }

    const repositories = (await response.json()) as GithubRepository[];

    return {
        repositories: repositories.filter((repository) => {
            return !repository.fork && !repository.archived;
        })
    };
};