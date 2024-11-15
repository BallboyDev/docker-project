# Docker

## Docker
- Docker는 애플리케이션을 개발, 배포 및 실행하기 위한 오픈 플랫폼입니다. Docker를 사용하면 애플리케이션을 인프라에서 분리하여 소프트웨어를 빠르게 제공할 수 있습니다.
- Docker를 통해 애플리케이션을 관리하는 방식과 동일한 방식으로 인프라를 관리 할 수 있습니다. Docker의 코드 배포, 테스트, 배포 방법론을 활용함으로써 코드를 작성하고 프로덕션 환경에서 실행하기까지의 지연 시간을 크게 줄일 수 있습니다.

## Docker Platform
- Docker는 컨테이너라고 불리는 느슨하게 격리된 환경에서 애플리케이션을 패키징하고 실행할 수 있는 기능을 제공합니다. 이러한 격리와 보안 덕분에 특정 호스트에서 여러 컨테이너를 동시에 실행할 수 있습니다.
- 컨테이너는 가벼우며 애플리케이션 실행에 필요한 모든 것을 포함하고 있어 호스트에 설치된 항복에 의존할 필요가 없습니다.
- 작업중에 컨테이너를 공유할 수 있으며, 공유된 모든 사람이 동일하게 작동하는 동일한 컨테이너를 받을 수 있습니다.

## Docker 사용
- 애플리케이션의 빠르고 일돤된 제공
    - Docker는 개발자가 애플리케이션과 서비스를 제공하는 로컬 컨테이너를 사용하여 표준화된 환경에서 작업 할 수 있도록 하여 개발 수명 주기를 간소화합니다.
- 대응형 배포 및 확장
    - 도커 컨테이너는 개발자의 로컬, 데이터 센터의 물리적 또는 가상 시스템, 클라우드 제공업체등 여러 환경에서 실행 할 수 있습니다.
- 동일한 하드웨어에서 더 많은 워크로드 실행
    - 도커는 하이퍼바이저 기반 가상 머신의 실행이 가능하고 비용 효율적인 대안을 제공하므로 더 많은 서버 용량을 사용하여 비즈니스 목표를 달성 할 수 있습니다.
    - 도커는 고밀도 환경과 적은 리소스로 더 많은 작업을 수행해야 하는 중소 규모 배포 환경에 적합합니다.

## Docker Architecture
- Docker는 클라이언트-서버 아키텍처를 사용합니다. Docker Clientsms 도커 컨테이너를 만들고, 실행하고, 배포하는 작업을 수행하는 도커 데몬과 대화합니다. 도커 클라이언트와 데몬은 동리한 시스템에서 실행되거나 도커 클라이언트를 원격 도커 데몬에 연결 할 수 있습니다. 

### Docker Daemon
- 도커 데몬은 도커 API 요청을 듣고 이미지, 컨테이너, 네트워크, 볼륨과 같은 도커 개체를 관리 합니다. 데몬은 다른 데몬과 통신하여 도커 서비스를 관리 할 수도 있습니다.

### Docker Desktop
- 도커 데스크톱은 PC환경을 위한 설치가 쉬운 애플리케이션으로 컨테이너형 애플리케이션과 마이크로 서비스를 구축하고 공유할 수 있습니다.
- 도커 데스크톱에는 Docker Daemon, Docker Client, Docker Compose, Docker Content Trust, Kubernetes, Credential Helper등을 포함합니다.

### Docker Registries
- 도커 레지스트리에는 도커 이미지가 저장됩니다. 도커 허브는 누구나 사용할 수 있는 공용 레지스트리이며, 도커는 기본적으로 도커 허브에서 이미지를 찾습니다. 자체 개인 레지스트리를 구성할 수도 있습니다.

### Docker Objects
#### images
- image는 도커 컨테이너를 만드는 지침이 포함된 읽기 전용 템플릿입니다. 이미지는 다른 이미지를 기반으로 작성되기도 하며, 며가지 추가 사용자 지정이 필요한 경우도 있습니다.
- 본인만의 이미지를 만들수도 있고, 레지스트리에 게시된 이미지를 사용할 수 도 있습니다.

#### Container
- container는 이미지의 실행 가능한 인스턴스 입니다. 도커 API 또는 CLI를 사용하여 컨테이너의 생성, 시작, 중지, 이동, 삭제를 진행 할 수 있습니다.
- container는 다른 container 및 host 시스템과 격리되어 있습니다. 컨테이너의 네트워크, 스토리지 또는 기타 기본 하위 시스템이 다른 컨테이너 또는 호스트 시스템과 얼마나 격리되어 있는지 제어할 수 있습니다.
- 컨테이너는 해당 이미지와 컨테이너를 만들거나 시작할 때 제공하는 모든 구성 옵션으로 정의됩니다. 컨테이너를 제고하면 영구 저장소에 저장되지 않은 상태의 변경사항이 모두 사라집니다.

