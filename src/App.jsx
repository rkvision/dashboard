import Header from './components/Header';
import './scss/styles.scss';


function App() {
  return (
    <>
    <Header />
    <main>
        <section class="heading">
            <h1>User Management</h1>
            <nav>
                <ul>
                    <li class="active">
                        <a href="#">Create User</a>
                    </li>
                    <li>
                        <a href="#">Modify User</a>
                    </li>
                    <li>
                        <a href="#">Dormancy Configuration</a>
                    </li>
                    <li>
                        <a href="#">1804</a>
                    </li>
                </ul>
            </nav>
        </section>
        <section class="content">
            <div class="alert success">
                <div class="msg"><span>User added successfully</span></div>
                <a class="close">X</a>
            </div>
            <form>
                <div class="row">
                    <div class="form-group">
                        <label>User Id</label>
                        <input placeholder="User Id" value="name" class="input-control" />
                    </div>
                    <div class="form-group">
                        <label>Role Name</label>
                        <select value="dpt" class="dropdown-control">
                            <option value="0">Role Name</option>
                            <option value="1">Role Name2</option>
                            <option value="2">Role Nam3</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label>Employee Name</label>
                        <input placeholder="Employee Name" value="emp" class="input-control" />
                    </div>
                    <div class="form-group">
                        <label>Employee code</label>
                        <input placeholder="Employee code" value="empCode" class="input-control" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label>Branch Name</label>
                        <input placeholder="Branch Name" value="branch" class="input-control" />
                    </div>
                    <div class="form-group">
                        <label>Branch code</label>
                        <input placeholder="Branch code" value="brcode" class="input-control" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label>Department Name</label>
                        <input placeholder="Department Name" value="dpt" class="input-control" />
                    </div>
                    <div class="form-group">
                        <label>Department code</label>
                        <input placeholder="Department code" value="dptcode" class="input-control" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-button">
                        <button class="reset">Reset</button>
                        <button class="submit">Submit</button>
                    </div>
                </div>
            </form>
        </section>
    </main>
    </>
  )
}

export default App
