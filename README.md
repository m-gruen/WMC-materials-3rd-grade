# WMC Materials 3rd grade HTL Leonding

## How to pull submodules

- **First clone the repository:**
    ```	
    git clone <your-repo-url> .
    ```

- **Then pull the submodules:**
    ```
    git submodule update --init --recursive
    git pull --recurse-submodules
    ```

- **Change the branch of the submodules to main/master:**
    ```
    cd <submodule-folder>
    git checkout <main/master>
    ```